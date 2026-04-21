const metadataByLocale = {
  es: {
    title: "Agenda del Torneo | Todos X Esther",
    description: "Consulta la agenda y los horarios de partidos del torneo solidario de pádel y tenis Todos X Esther. Del 20 al 26 de Abril en Club Esportiu Valldoreix.",
    keywords: "agenda torneo, horarios pádel tenis, programa torneo solidario, Valldoreix, partidos, calendario, Todos X Esther",
  },
  ca: {
    title: "Agenda del Torneig | Tots X Esther",
    description: "Consulta l'agenda i els horaris de partits del torneig solidari de pàdel i tennis Tots X Esther. Del 20 al 26 d'Abril al Club Esportiu Valldoreix.",
    keywords: "agenda torneig, horaris pàdel tennis, programa torneig solidari, Valldoreix, partits, calendari, Tots X Esther",
  },
  en: {
    title: "Tournament Schedule | All for Esther",
    description: "Check the schedule and match times for the All for Esther charity paddle and tennis tournament. April 20–26 at Club Esportiu Valldoreix.",
    keywords: "tournament schedule, paddle tennis times, charity tournament program, Valldoreix, matches, calendar, All for Esther",
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
      canonical: `/${locale}/agenda`,
      languages: {
        ca: '/ca/agenda',
        es: '/es/agenda',
        en: '/en/agenda',
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}/agenda`,
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

export default function AgendaLayout({ children }) {
  return children;
}
