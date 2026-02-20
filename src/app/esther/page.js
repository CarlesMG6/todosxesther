"use client"

import Footer from "../components/Footer";
import Header from "../components/Header";
import EstherDescription from "../components/EstherDescription";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Header />

      <main className="flex flex-grow w-full flex-col items-center justify-between py-32 px-16 ">
        <EstherDescription />
      </main>

      <Footer />
    </div>
  );
}
