const metadataByLocale = {
  es: {
    title: "Contacto | Todos X Esther",
    description: "Contacta con el equipo organizador del torneo solidario Todos X Esther. Resolvemos tus dudas sobre inscripción, donaciones y el evento.",
    keywords: "contacto, torneo solidario, pádel tenis, Todos X Esther, organización, dudas, inscripción, Valldoreix",
  },
  ca: {
    title: "Contacte | Tots X Esther",
    description: "Contacta amb l'equip organitzador del torneig solidari Tots X Esther. Resolem els teus dubtes sobre inscripció, donacions i l'event.",
    keywords: "contacte, torneig solidari, pàdel tennis, Tots X Esther, organització, dubtes, inscripció, Valldoreix",
  },
  en: {
    title: "Contact | All for Esther",
    description: "Contact the organizing team of the All for Esther charity tournament. We answer your questions about registration, donations and the event.",
    keywords: "contact, charity tournament, paddle tennis, All for Esther, organizers, questions, registration, Valldoreix",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const metadata = metadataByLocale[locale] || metadataByLocale.es;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://todosxesther.com';

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `/${locale}/contacto`,
      languages: {
        ca: '/ca/contacto',
        es: '/es/contacto',
        en: '/en/contacto',
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}/contacto`,
      siteName: 'Todos x Esther',
      title: metadata.title,
      description: metadata.description,
      images: [{ url: '/images/esther/esther.jpeg', width: 1200, height: 630, alt: metadata.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/images/esther/esther.jpeg'],
    },
  };
}

export default function ContactoLayout({ children }) {
  return children;
}
