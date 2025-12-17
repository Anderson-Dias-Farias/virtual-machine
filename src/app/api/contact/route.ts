import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
        "https://hook.us1.make.celonis.com/jfwx27wma78yfb8nzjqcwfmjhzvojv1v";
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
