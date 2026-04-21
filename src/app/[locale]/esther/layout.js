const metadataByLocale = {
  es: {
    title: "¿Quién es Esther? | Todos X Esther",
    description: "Conoce a Esther y su historia con la enfermedad de Corea de Huntington. Un torneo solidario de pádel y tenis para apoyarla en su lucha.",
    keywords: "Esther, Corea de Huntington, enfermedad rara, historia, solidaridad, torneo benéfico pádel tenis Valldoreix",
  },
  ca: {
    title: "Qui és Esther? | Tots X Esther",
    description: "Coneix l'Esther i la seva història amb la malaltia de Corea de Huntington. Un torneig solidari de pàdel i tennis per donar-li suport.",
    keywords: "Esther, Corea de Huntington, malaltia rara, història, solidaritat, torneig benèfic pàdel tennis Valldoreix",
  },
  en: {
    title: "Who is Esther? | All for Esther",
    description: "Meet Esther and her story with Huntington's disease. A charity paddle and tennis tournament to support her in her fight.",
    keywords: "Esther, Huntington's disease, rare disease, story, solidarity, charity paddle tennis tournament Valldoreix",
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
      canonical: `/${locale}/esther`,
      languages: {
        ca: '/ca/esther',
        es: '/es/esther',
        en: '/en/esther',
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}/esther`,
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

export default function EstherLayout({ children }) {
  return children;
}
