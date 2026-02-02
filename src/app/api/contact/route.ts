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
  natureza_juridica?: string;
  porte?: string;
}

// Função para validar CNPJ usando BrasilAPI
async function validarCNPJ(cnpj: string): Promise<{
  ok: boolean;
  data?: CNPJData;
  error?: string;
}> {
  try {
    const cleanCNPJ = cnpj.replace(/\D/g, "");
    console.log("🔍 [CNPJ] Iniciando validação para:", cleanCNPJ);

    if (cleanCNPJ.length !== 14) {
      console.log("❌ [CNPJ] CNPJ não tem 14 dígitos");
      return { ok: false, error: "CNPJ não é válido" };
    }

    console.log("🌐 [CNPJ] Consultando API BrasilAPI...");
    const res = await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${cleanCNPJ}`
    );
    
    console.log("📡 [CNPJ] Status da resposta BrasilAPI:", res.status, res.ok);
    
    let data;
    
    // Se BrasilAPI retornar 403, tentar ReceitaWS como fallback
    if (!res.ok && res.status === 403) {
      console.log("⚠️ [CNPJ] BrasilAPI retornou 403 - tentando ReceitaWS como fallback...");
      const resReceitaWS = await fetch(
        `https://www.receitaws.com.br/v1/cnpj/${cleanCNPJ}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      
      console.log("📡 [CNPJ] Status da resposta ReceitaWS:", resReceitaWS.status, resReceitaWS.ok);
      
      if (resReceitaWS.ok) {
        const dataReceitaWS = await resReceitaWS.json();
        
        if (dataReceitaWS.status === "ERROR") {
          console.log("❌ [CNPJ] ReceitaWS também retornou erro");
          return { ok: false, error: "CNPJ não é válido" };
        }
        
        // Converter dados da ReceitaWS para o formato esperado
        const naturezaJuridica = dataReceitaWS.natureza_juridica || "";
        const isMEIReceitaWS = naturezaJuridica.includes("213-5") || naturezaJuridica.includes("2135");
        
        data = {
          codigo_natureza_juridica: isMEIReceitaWS ? "213-5" : "",
          descricao_identificador_matriz_filial: dataReceitaWS.tipo === "MATRIZ" ? "Matriz" : "",
          razao_social: dataReceitaWS.nome || "",
          nome_fantasia: dataReceitaWS.fantasia || "",
          data_inicio_atividade: dataReceitaWS.abertura || "",
          descricao_situacao_cadastral: dataReceitaWS.situacao || "",
        };
        
        console.log("🔄 [CNPJ] Dados convertidos da ReceitaWS - MEI detectado?", isMEIReceitaWS);
        console.log("📦 [CNPJ] Dados recebidos da ReceitaWS (fallback)");
      } else {
        console.log("❌ [CNPJ] ReceitaWS também falhou");
        return { ok: false, error: "CNPJ não é válido" };
      }
    } else if (!res.ok) {
      console.log("❌ [CNPJ] API retornou erro:", res.status);
      return { ok: false, error: "CNPJ não é válido" };
    } else {
      data = await res.json();
      console.log("📦 [CNPJ] Dados recebidos da BrasilAPI");
    }

    console.log("═══════════════════════════════════════");
    console.log("🔍 [CNPJ] DEBUG - Dados da API:");
    console.log("codigo_natureza_juridica:", data.codigo_natureza_juridica);
    console.log("descricao_identificador_matriz_filial:", data.descricao_identificador_matriz_filial);
    console.log("razao_social:", data.razao_social);
    console.log("nome_fantasia:", data.nome_fantasia);
    console.log("data_inicio_atividade:", data.data_inicio_atividade);
    console.log("descricao_situacao_cadastral:", data.descricao_situacao_cadastral);
    console.log("error:", data.error);
    console.log("message:", data.message);
    console.log("type:", data.type);
    console.log("═══════════════════════════════════════");

    // Verificar se a resposta contém erro
    if (!data || data.error || data.message || data.type === "bad_request") {
      console.log("❌ [CNPJ] Erro na resposta da API - retornando CNPJ inválido");
      return { ok: false, error: "CNPJ não é válido" };
    }

    // 1. PRIMEIRO: Verificar se é MEI
    const codigoNatureza = data.codigo_natureza_juridica?.toString() || "";
    const descricaoMatriz = data.descricao_identificador_matriz_filial || "";
    const isMatriz = descricaoMatriz === "Matriz" || descricaoMatriz === "MATRIZ" || descricaoMatriz === "matriz";
    
    console.log("🔍 [MEI] Verificando se é MEI:");
    console.log("  - codigoNatureza:", codigoNatureza);
    console.log("  - descricaoMatriz:", descricaoMatriz);
    console.log("  - isMatriz:", isMatriz);
    console.log("  - É MEI (213-5 ou 2135)?", codigoNatureza === "213-5" || codigoNatureza === "2135");
    console.log("  - RESULTADO FINAL É MEI?", isMatriz && (codigoNatureza === "213-5" || codigoNatureza === "2135"));
    
    if (isMatriz && (codigoNatureza === "213-5" || codigoNatureza === "2135")) {
      console.log("❌ [MEI] MEI DETECTADO! Retornando erro específico");
      return { ok: false, error: "Cadastro de MEI não são suportados" };
    }
    console.log("✅ [MEI] Não é MEI, continuando validação...");

    // 2. SEGUNDO: Verificar se tem 6 meses
    if (data.data_inicio_atividade) {
      let dataAbertura: Date;
      if (data.data_inicio_atividade.includes("/")) {
        dataAbertura = new Date(
          data.data_inicio_atividade.split("/").reverse().join("-")
        );
      } else {
        dataAbertura = new Date(data.data_inicio_atividade);
      }

      const agora = new Date();
      const meses =
        (agora.getFullYear() - dataAbertura.getFullYear()) * 12 +
        (agora.getMonth() - dataAbertura.getMonth());

      if (meses < 6) {
        return {
          ok: false,
          error: "Sua empresa não cumpre os requisitos necessários",
        };
      }
    }

    // 3. TERCEIRO: Verificar se está ativo
    if (data.descricao_situacao_cadastral !== "ATIVA") {
      return {
        ok: false,
        error: `CNPJ não está ativo na Receita Federal. Situação atual: ${
          data.descricao_situacao_cadastral || "Não informada"
        }`,
      };
    }

    // 4. Verificar se os dados essenciais estão presentes
    if (!data.razao_social && !data.nome_fantasia) {
      return { ok: false, error: "CNPJ não é válido" };
    }

    return {
      ok: true,
      data: {
        razao_social: data.razao_social || data.nome_fantasia || "",
        situacao: data.descricao_situacao_cadastral || "",
        abertura: data.data_inicio_atividade || "",
        atividade_principal: data.natureza_juridica || "",
        natureza_juridica: data.codigo_natureza_juridica?.toString() || "",
        porte: data.porte || "",
      },
    };
  } catch (error) {
    console.error("Erro ao verificar CNPJ:", error);
    return { ok: false, error: "CNPJ não é válido" };
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

    // Validação de número de funcionários (mínimo 5)
    if (funcionarios && funcionarios.trim() !== "") {
      const numFuncionarios = parseInt(funcionarios.replace(/\D/g, ""), 10);
      if (isNaN(numFuncionarios) || numFuncionarios < 5) {
        return NextResponse.json(
          { error: "A quantidade mínima de funcionários é 5" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Quantidade de funcionários é obrigatório" },
        { status: 400 }
      );
    }

    // Validação de CNPJ (obrigatório)
    if (!cnpj || cnpj.trim() === "") {
      return NextResponse.json(
        { error: "CNPJ é obrigatório" },
        { status: 400 }
      );
    }

    if (!isValidCNPJ(cnpj)) {
      return NextResponse.json(
        {
          error:
            "CNPJ inválido. Verifique o formato e os dígitos verificadores.",
        },
        { status: 400 }
      );
    }

    // Verificar CNPJ usando BrasilAPI
    const cnpjStatus = await validarCNPJ(cnpj);
    if (!cnpjStatus.ok) {
      return NextResponse.json(
        {
          error: cnpjStatus.error || "CNPJ não está ativo na Receita Federal",
        },
        { status: 400 }
      );
    }

    // Salvar dados do CNPJ para incluir no email e webhook
    const cnpjData = cnpjStatus.data || null;

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
        "https://hook.us2.make.com/eegb1qdkddd1afyw84fj37rpdn72r24i";
      const webhookResponse = await fetch(webhookUrl, {
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

      // Verificar se a resposta foi bem-sucedida
      if (!webhookResponse.ok) {
        const responseText = await webhookResponse.text();
        console.error(
          `Erro ao enviar para webhook: Status ${webhookResponse.status} ${webhookResponse.statusText}`,
          {
            url: webhookUrl,
            status: webhookResponse.status,
            statusText: webhookResponse.statusText,
            response: responseText,
          }
        );

        // 410 Gone significa que o webhook não existe mais
        if (webhookResponse.status === 410) {
          console.error(
            "⚠️ ATENÇÃO: O webhook foi removido ou não existe mais (410 Gone). Verifique a URL do webhook no Make."
          );
        }
      } else {
        console.log("✅ Webhook enviado com sucesso");
      }
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
