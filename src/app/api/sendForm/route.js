import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, type } = await req.json();
    console.log("Received data:", { name, email, message, type });
    if ((!name || !email || !message)) {
      return NextResponse.json(
        { success: false, error: "Faltan campos" },
        { status: 400 }
      );
    }
        await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Alguien tiene una duda",
      html: `<p>Alguien ha rellenado el formulario de contacto en la web de todosxesther:</p>
             <p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message || "Error desconocido" },
      { status: 500 }
    );
  }
}
