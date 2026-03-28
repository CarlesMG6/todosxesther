'use client'

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { X, MapPin, Calendar } from 'lucide-react';

const LOCATION_URL = 'https://www.google.com/maps/place/Club+Deportivo+Valldoreix/@41.504528,2.1571963,33050m/data=!3m1!1e3!4m6!3m5!1s0x12a490d00aa0c3ad:0xac7f463d48e4165d!8m2!3d41.4502467!4d2.0558162!16s%2Fg%2F1td8n7gt?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D';
const TENNIS_URL = 'https://www.xporty.com/tournaments/8714675-4o-torneo-solidario-tenis-txe';
const PADEL_URL = 'https://www.xporty.com/tournaments/8672898-4o-torneo-solidario-padel-txe';

export default function Hero() {
  const t = useTranslations('Hero');
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative  flex items-center pt-8 pb-20 md:py-0 md:px-8 overflow-hidden bg-background">
        <div className="w-full mx-auto px-4 sm:px-8 grid md:grid-cols-12 gap-8 md:gap-14 xl:gap-28 items-center py-12">
          {/* Left Column - Content */}
          <div className="md:col-span-7 z-10 items-center justify-center">
            <span className="inline-block px-4 py-1 bg-pale-orange text-orange-900 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
              {t('editionBadge')}
            </span>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[0.95] mb-6 sm:mb-8 text-primary">
              {t('headline')} <br />
              <span className="text-accent italic ">{t('headlineEmphasis')}</span>
            </h1>
            <p className="text-base md:text-lg xl:text-xl text-secondary max-w-xl mb-8 sm:mb-10 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-accent text-accent-contrast px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {t('cta')}
              </button>
              <button
                onClick={() => router.push('/agenda')}
                className="hidden md:flex bg-card text-accent px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {t('agendaCta')}
              </button>
            </div>
          </div>

          {/* Right Column - Image + Info Card */}
          <div className="md:col-span-5 relative mt-8 md:mt-0 flex max-h-3/4">
            <div className="aspect-4/5 rounded-xl overflow-hidden shadow-2xl md:rotate-6 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/images/padel.jpg"
                alt="Torneo de pádel"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Floating Info Card */}
          <div className="absolute -bottom-6 sm:-bottom-10 -translate-x-1/2 left-1/2 md:translate-0 md:-left-10 backdrop-blur-lg bg-card/30 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl max-w-70 w-max sm:max-w-xs border border-white/30 hover:scale-105 transition-transform duration-300">
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 group hover:text-accent transition-colors"
              >
                <MapPin className="text-accent shrink-0" size={32} strokeWidth={2} />
                <div>
                  <p className="font-bold text-xs uppercase tracking-wide text-secondary">
                    {t('locationLabel')}
                  </p>
                  <p className="font-bold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                    {t('location')}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 sm:gap-4">
                <Calendar className="text-accent shrink-0" size={32} strokeWidth={2} />
                <div>
                  <p className="font-bold text-xs uppercase tracking-wide text-secondary">
                    {t('dateLabel')}
                  </p>
                  <p className="font-bold text-sm sm:text-base text-primary">
                    {t('dateRange')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-card/30 rounded-l-[100px] sm:rounded-l-[200px] hidden md:block" />
      </section>

      {/* ─── Modal ─── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl p-6 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl lg:text-2xl font-medium text-center text-primary mt-4 mb-8">
              {t('modalTitle')}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-pale-orange rounded-xl p-6 gap-4">
                <span className="text-4xl">🏸</span>
                <h3 className="text-xl font-bold text-primary">{t('padel')}</h3>
                <p className="text-sm text-secondary text-center leading-relaxed">
                  {t('padelCategories')}
                </p>
                <a
                  href={PADEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-accent text-accent-contrast font-semibold py-2.5 px-6 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                >
                  {t('signUp')}
                </a>
              </div>

              <div className="flex flex-col items-center bg-pale-pink rounded-xl p-6 gap-4">
                <span className="text-4xl">🎾</span>
                <h3 className="text-xl font-bold text-primary">{t('tennis')}</h3>
                <p className="text-sm text-secondary text-center leading-relaxed">
                  {t('tennisCategories')}
                </p>
                <a
                  href={TENNIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-accent text-accent-contrast font-semibold py-2.5 px-6 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                >
                  {t('signUp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
