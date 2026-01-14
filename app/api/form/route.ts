import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    // URL do webhook n8n
    const webhookUrl = process.env.N8N_URL_FORM;

    if (!webhookUrl) {
      console.error("N8N_URL_FORM não está configurado");
      return NextResponse.json(
        { error: "Configuração do servidor incompleta" },
        { status: 500 }
      );
    }

    // Envia os dados para o webhook n8n
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        phone,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook respondeu com status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso!",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      {
        error: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}
