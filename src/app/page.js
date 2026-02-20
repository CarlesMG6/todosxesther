"use client"

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Header />

      <main className="flex flex-grow w-full flex-col items-center justify-between py-32 px-16 ">
        {/* Hero o landing - Bonito con alguna foto o algo 
          - Info sobre el torneo - fecha, lugar, categorías, etc
          - Padel y tennis + Botón apuntarse que redirija a xporty
          - Mensajito de se tiene en cuenta tu disponibilidad horaria y se flexibiliza para que puedas participar.
        */}
        {/* call to action (CTA) a quien es esther - descubre la historia de Esther */}
        {/* call to action (CTA) a donaciones - ¿Como puedo ayudar?*/}
        {/* call to action (CTA) a agenda del torneo - consulta la agenda o consulta todo lo que tenemos preparado o algo así */}
      </main>

      <Footer />
    </div>
  );
}
