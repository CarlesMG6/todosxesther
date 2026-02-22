"use client"

import ContactOptions from "@/components/ContactOptions";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
      // TODO https://clubesportiuvalldoreix.com/ca/
      // TODO teníamos anotado esto:
      // - Formulario de contacto (nombre, email, mensaje)
      // - Información de contacto (email, teléfono, dirección Valldoreix)
          //infotodosconesther@gmail.com
          //+34 629 644 588
      // - Redes sociales (link a instagram, whatsapp, llamada directa, mail directo)
      // - FAQ o sección de preguntas frecuentes (opcional)
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Header />

      <main className="flex flex-grow w-full flex-col items-center justify-between py-32 px-16 ">
          <ContactForm />
          <ContactOptions />
      </main>

      <Footer />
    </div>
  );
}
