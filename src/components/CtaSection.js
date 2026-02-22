'use client'

import CtaOption from "./CtaOption";
import { useTranslations } from "next-intl";

const OPTIONS = [
  {
    titleKey: "CtaSection.options.esther.title",
    descriptionKey: "CtaSection.options.esther.description",
    image: "/images/txe_logo_gato_txe.png",
    imgContain: true,
    buttonTextKey: "CtaSection.options.esther.buttonText",
    buttonHref: "/esther",
  },
  {
    titleKey: "CtaSection.options.agenda.title",
    descriptionKey: "CtaSection.options.agenda.description",
    image: "/images/txe_logo_gato_txe.png",
    imgContain: true,
    buttonTextKey: "CtaSection.options.agenda.buttonText",
    buttonHref: "/agenda",
  },
  {
    titleKey: "CtaSection.options.ayudar.title",
    descriptionKey: "CtaSection.options.ayudar.description",
    image: "/images/txe_logo_gato_txe.png",
    imgContain: true,
    buttonTextKey: "CtaSection.options.ayudar.buttonText",
    buttonHref: "/donaciones",
  },
  {
    titleKey: "CtaSection.options.contacto.title",
    descriptionKey: "CtaSection.options.contacto.description",
    image: "/images/txe_logo_gato_txe.png",
    imgContain: true,
    buttonTextKey: "CtaSection.options.contacto.buttonText",
    buttonHref: "/contacto",
  },
];

export default function CtaSection() {
  const t = useTranslations();

  return (
    <section id="servicios-section" className="w-full flex flex-col items-center text-foreground mb-36 md:mb-28">
      {/* <h2 className="text-4xl xl:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center">Titulo</h2>
      <p className="md:w-full w-10/12 text-md text-center mb-8 max-w-2xl">
        Subtítulo
      </p> */}
      <div className="flex flex-col flex-wrap gap-8 justify-center item-center w-full max-w-4xl">
        {OPTIONS.map((option, idx) => (
          <CtaOption
            key={option.titleKey}
            title={t(option.titleKey)}
            description={t(option.descriptionKey)}
            image={option.image}
            imageSide={idx % 2 === 0 ? "left" : "right"}
            buttonText={t(option.buttonTextKey)}
            buttonHref={option.buttonHref}
            buttonClassName="transition-all duration-200 hover:bg-accent/80 hover:scale-110 hover:shadow-xl"
            imgContain={option.imgContain}
          />
        ))}
      </div>
    </section>
  );
}
