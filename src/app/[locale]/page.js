"use client"

import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Header />
      <div className="flex grow w-full items-center justify-center flex-col mt-24">
      {/* Hero o landing - Bonito con alguna foto o algo 
        - Info sobre el torneo - fecha, lugar, categorías, etc
        - Padel y tennis + Botón apuntarse que redirija a xporty
        - Mensajito de se tiene en cuenta tu disponibilidad horaria y se flexibiliza para que puedas participar.
      */}
      <Hero/>
      <main className="flex grow w-full flex-col items-center justify-between py-32 px-16 ">
        <CtaSection />
        {/* call to action (CTA) a quien es esther - descubre la historia de Esther */}
        {/* call to action (CTA) a donaciones - ¿Como puedo ayudar?*/}
        {/* call to action (CTA) a agenda del torneo - consulta la agenda o consulta todo lo que tenemos preparado o algo así */}
      </main>
      </div>
      <Footer />
    </div>
  );
}
