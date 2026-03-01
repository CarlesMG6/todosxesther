import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const metadataByLocale = {
  ca: {
    title: "Tots x Esther - Torneig solidari de pàdel i tennis",
    description: "4a edició del torneig solidari de tennis i pàdel per la malaltia de Corea de Huntington. Del 20 al 26 d'Abril al Club Esportiu Valldoreix. Ajuda'ns a lluitar!",
    keywords: "torneig solidari, pàdel, tennis, Corea de Huntington, Esther, Valldoreix, La Vida es Xula, charity, beneficència",
  },
  es: {
    title: "Todos x Esther - Torneo solidario de pádel y tenis",
    description: "4ª edición del torneo solidario de tenis y pádel por la enfermedad de Corea de Huntington. Del 20 al 26 de Abril en Club Esportiu Valldoreix. ¡Ayúdanos a luchar!",
    keywords: "torneo solidario, pádel, tenis, Corea de Huntington, Esther, Valldoreix, La Vida es Xula, caridad, beneficencia",
  },
  en: {
    title: "All for Esther - Charity paddle & tennis tournament",
    description: "4th edition of the charity tennis and paddle tournament for Huntington's disease. April 20-26 at Club Esportiu Valldoreix. Help us fight!",
    keywords: "charity tournament, paddle, tennis, Huntington's disease, Esther, Valldoreix, La Vida es Xula, charity, fundraiser",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const metadata = metadataByLocale[locale] || metadataByLocale.ca;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://todosxesther.com';
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Todos x Esther" }],
    creator: "Todos x Esther",
    publisher: "La Vida es Xula",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'ca': '/ca',
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${siteUrl}/${locale}`,
      siteName: 'Todos x Esther',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/images/esther/esther.jpeg',
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/images/esther/esther.jpeg'],
      creator: '@todosxesther',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
        },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'Todos x Esther',
    },
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale)) notFound();

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const metadata = metadataByLocale[locale] || metadataByLocale.ca;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://todosxesther.com';

  // Structured data para SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": metadata.title,
    "description": metadata.description,
    "image": `${siteUrl}/images/esther/esther.jpeg`,
    "startDate": "2026-04-20",
    "endDate": "2026-04-26",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "SportsActivityLocation",
      "name": "Club Esportiu Valldoreix",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sant Cugat del Vallès",
        "addressRegion": "Barcelona",
        "addressCountry": "ES"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "La Vida es Xula",
      "url": siteUrl
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/${locale}/donaciones`,
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    }
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Analytics />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
