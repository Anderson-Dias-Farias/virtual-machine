import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Função para validar formato de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para validar CNPJ (formato e dígitos verificadores)
function isValidCNPJ(cnpj: string): boolean {
  // Remove caracteres não numéricos
  const cleanCNPJ = cnpj.replace(/\D/g, "");

  // Verifica se tem 14 dígitos
  if (cleanCNPJ.length !== 14) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (CNPJ inválido)
  if (/^(\d)\1+$/.test(cleanCNPJ)) {
    return false;
  }

  // Validação dos dígitos verificadores
  let length = cleanCNPJ.length - 2;
  let numbers = cleanCNPJ.substring(0, length);
  const digits = cleanCNPJ.substring(length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }

  length = length + 1;
  numbers = cleanCNPJ.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) {
    return false;
  }

  return true;
}

// Interface para dados do CNPJ
interface CNPJData {
  razao_social: string;
  situacao: string;
  abertura: string;
  atividade_principal: string;
}

// Função para verificar se CNPJ está ativo na ReceitaWS
async function isCNPJActive(cnpj: string): Promise<{
  active: boolean;
  data?: CNPJData;
  error?: string;
}> {
  try {
    const cleanCNPJ = cnpj.replace(/\D/g, "");

    // Usando a API pública da ReceitaWS
    const response = await fetch(
      `https://www.receitaws.com.br/v1/cnpj/${cleanCNPJ}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return {
        active: false,
        error: "Erro ao consultar CNPJ na ReceitaWS",
      };
    }

    const data = await response.json();

    // Verifica se o CNPJ está ativo
    if (data.status === "ERROR") {
      return {
        active: false,
        error: data.message || "CNPJ não encontrado",
      };
    }

    // Verifica se a situação é "ATIVA"
    const isActive = data.situacao === "ATIVA";

    return {
      active: isActive,
      data: {
        razao_social: data.nome,
        situacao: data.situacao,
        abertura: data.abertura,
        atividade_principal: data.atividade_principal?.[0]?.text || "",
      },
      error: isActive
        ? undefined
        : `CNPJ não está ativo na Receita Federal. Situação atual: ${
            data.situacao || "Não informada"
          }`,
    };
  } catch (error) {
    console.error("Erro ao verificar CNPJ:", error);
    return {
      active: false,
      error: "Erro ao consultar CNPJ",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, cnpj, funcionarios, empresa } = body;

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: "Nome, email e telefone são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação de email
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    // Validação de CNPJ (se fornecido)
    let cnpjData = null;
    if (cnpj && cnpj.trim() !== "") {
      if (!isValidCNPJ(cnpj)) {
        return NextResponse.json(
          {
            error:
              "CNPJ inválido. Verifique o formato e os dígitos verificadores.",
          },
          { status: 400 }
        );
      }

      // Verificar se CNPJ está ativo
      const cnpjStatus = await isCNPJActive(cnpj);
      if (!cnpjStatus.active) {
        return NextResponse.json(
          {
            error: cnpjStatus.error || "CNPJ não está ativo na Receita Federal",
          },
          { status: 400 }
        );
      }

      // Salvar dados do CNPJ para incluir no email e webhook
      cnpjData = cnpjStatus.data;
    }

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Ignorar verificação de certificado SSL (necessário quando o certificado não corresponde ao hostname)
        rejectUnauthorized: false,
      },
    });

    // Conteúdo do email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Nova solicitação de orçamento - ${empresa || "Não informado"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28a6c3;">Nova Solicitação de Orçamento</h2>
          <div style="background-color: #f5f5f7; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            ${cnpj ? `<p><strong>CNPJ:</strong> ${cnpj}</p>` : ""}
            ${
              cnpjData
                ? `<p><strong>Razão Social (CNPJ):</strong> ${cnpjData.razao_social}</p>`
                : ""
            }
            ${
              cnpjData
                ? `<p><strong>Situação CNPJ:</strong> ${cnpjData.situacao}</p>`
                : ""
            }
            ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ""}
            ${
              funcionarios
                ? `<p><strong>Quantidade de Funcionários:</strong> ${funcionarios}</p>`
                : ""
            }
          </div>
          <p style="margin-top: 20px; color: #666;">
            Esta mensagem foi enviada através do formulário de contato do site Virtual Machine.
          </p>
        </div>
      `,
      text: `
        Nova Solicitação de Orçamento
        
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone}
        ${cnpj ? `CNPJ: ${cnpj}` : ""}
        ${empresa ? `Empresa: ${empresa}` : ""}
        ${funcionarios ? `Quantidade de Funcionários: ${funcionarios}` : ""}
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    // Enviar dados para o webhook do Make
    try {
      const webhookUrl =
        "https://hook.us2.make.com/pmvx7obxafcrdibsy80a334g4f9stplw";
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          cnpj: cnpj || null,
          cnpj_data: cnpjData || null,
          funcionarios: funcionarios || null,
          empresa: empresa || null,
        }),
      });
    } catch (webhookError) {
      // Log do erro do webhook, mas não falha a requisição
      console.error("Erro ao enviar para webhook:", webhookError);
    }

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
