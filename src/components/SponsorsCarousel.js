'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

// ───────────────────────────────────────────────
// Edita esta lista para añadir o quitar sponsors.
// Cada sponsor necesita:
//   - name: nombre (se usa como alt text)
//   - logo: ruta a la imagen dentro de /public
//   - url:  enlace a la web del sponsor
// ───────────────────────────────────────────────
const SPONSORS = [
  {
    name: 'La Vida es Xula',
    logo: '/images/sponsors/la_vida_es_xula.png',
    url: 'https://www.instagram.com/lavidaesxxula/?hl=es',
  },
  {
    name: 'Club Esportiu Valldoreix',
    logo: '/images/sponsors/club_esportiu_valldoreix.png',
    url: 'https://clubesportiuvalldoreix.com/ca/',
  },
  {
    name: 'Federació Catalana de Pàdel',
    logo: '/images/sponsors/federacio_catalana_padel.png',
    url: 'https://www.fcpadel.cat',
  },
  {
    name: 'Origen Solar',
    logo: '/images/sponsors/origen_solar.png',
    url: 'https://www.origensolar.es',
  },
];

export default function SponsorsCarousel() {
  const t = useTranslations('Sponsors');

  // Duplicamos la lista para lograr un scroll infinito sin cortes
  const duplicated = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      {/* <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 text-primary">
        {t('title')}
      </h2> */}

      <div className="relative w-full">
        {/* Gradientes laterales para efecto fade-out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-24 z-10 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-24 z-10 bg-linear-to-l from-white to-transparent" />

        <div className="flex animate-scroll lg:gap-12 w-max hover:[animation-play-state:paused]">
          {duplicated.map((sponsor, idx) => (
            <a
              key={`${sponsor.name}-${idx}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center h-16 w-40 lg:h-24 lg:w-48 lg:grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              title={sponsor.name}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={180}
                height={90}
                className="object-contain h-full w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
