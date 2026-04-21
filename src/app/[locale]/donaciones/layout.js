const metadataByLocale = {
  es: {
    title: "Cómo ayudar | Todos X Esther",
    description: "Descubre cómo puedes ayudar a Esther: dona, juega el torneo solidario de pádel o tenis, o hazte sponsor. El 90% de los fondos van directamente a su cuidado.",
    keywords: "donar, ayudar, torneo solidario pádel tenis, inscripción torneo, sponsors, Corea de Huntington, Todos X Esther, La Vida es Xula",
  },
  ca: {
    title: "Com ajudar | Tots X Esther",
    description: "Descobreix com pots ajudar l'Esther: dona, juga el torneig solidari de pàdel o tennis, o fes-te sponsor. El 90% dels fons van directament a la seva cura.",
    keywords: "donar, ajudar, torneig solidari pàdel tennis, inscripció torneig, sponsors, Corea de Huntington, Tots X Esther, La Vida es Xula",
  },
  en: {
    title: "How to help | All for Esther",
    description: "Find out how you can help Esther: donate, play the charity paddle or tennis tournament, or become a sponsor. 90% of funds go directly to her care.",
    keywords: "donate, help, charity paddle tennis tournament, tournament registration, sponsors, Huntington's disease, All for Esther, La Vida es Xula",
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
      canonical: `/${locale}/donaciones`,
      languages: {
        ca: '/ca/donaciones',
        es: '/es/donaciones',
        en: '/en/donaciones',
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}/donaciones`,
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

export default function DonacionesLayout({ children }) {
  return children;
}
