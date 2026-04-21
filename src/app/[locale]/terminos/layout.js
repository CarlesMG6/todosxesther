const metadataByLocale = {
  es: {
    title: "Términos y Condiciones | Todos X Esther",
    description: "Consulta los términos y condiciones del torneo solidario Todos X Esther: derechos de imagen, aceptación del reglamento y descarga del reglamento oficial.",
    keywords: "términos y condiciones, reglamento torneo, derechos de imagen, normas torneo pádel tenis, Todos X Esther",
  },
  ca: {
    title: "Termes i Condicions | Tots X Esther",
    description: "Consulta els termes i condicions del torneig solidari Tots X Esther: drets d'imatge, acceptació del reglament i descàrrega del reglament oficial.",
    keywords: "termes i condicions, reglament torneig, drets d'imatge, normes torneig pàdel tennis, Tots X Esther",
  },
  en: {
    title: "Terms and Conditions | All for Esther",
    description: "Check the terms and conditions of the All for Esther charity tournament: image rights, acceptance of the regulations and download of the official rulebook.",
    keywords: "terms and conditions, tournament regulations, image rights, paddle tennis tournament rules, All for Esther",
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
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}/terminos`,
      languages: {
        ca: '/ca/terminos',
        es: '/es/terminos',
        en: '/en/terminos',
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}/terminos`,
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

export default function TerminosLayout({ children }) {
  return children;
}
