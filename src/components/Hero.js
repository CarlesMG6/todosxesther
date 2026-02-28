'use client'

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { X, MapPin } from 'lucide-react';

const LOCATION_URL = 'https://www.google.com/maps/place/Club+Deportivo+Valldoreix/@41.504528,2.1571963,33050m/data=!3m1!1e3!4m6!3m5!1s0x12a490d00aa0c3ad:0xac7f463d48e4165d!8m2!3d41.4502467!4d2.0558162!16s%2Fg%2F1td8n7gt?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D';
const PADEL_URL = 'https://www.xporty.com/tournaments/4442075-torneo-padel-todos-x-esther';
const TENNIS_URL = 'https://www.xporty.com/tournaments/4625543-torneo-tenis-todos-x-esther';

export default function Hero() {
  const t = useTranslations('Hero');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Background desktop */}
        <Image
          src="/images/hero_background.png"
          alt="Todos X Esther"
          width={1800}
          height={750}
          className="hidden lg:block w-full object-cover aspect-12/5 object-[20%_60%]"
          priority
        />
        {/* Background mobile */}
        <Image
          src="/images/hero_background2.png"
          alt="Todos X Esther"
          width={400}
          height={600}
          className="block lg:hidden w-full object-cover"
          priority
        />

        {/* Overlay + content */}
        <div className="absolute inset-0 flex flex-col items-center justify-between pt-6 pb-10 lg:py-12 px-4 overflow-clip">
          <div className="relative text-center">
            <div className="absolute inset-0 -m-6 rounded-3xl bg-white/70 blur-2xl pointer-events-none scale-x-150" />
            <div className="relative">
              <p className="text-sm lg:text-base font-semibold text-accent/80 uppercase tracking-widest mb-1">
                {t('edition')}
              </p>
              <h1 className="text-3xl lg:text-5xl font-semibold mb-2 text-accent uppercase tracking-wider">
                {t('title')}
              </h1>
              <p className="text-base lg:text-2xl font-medium text-secondary mb-3 lg:mb-6 uppercase tracking-widest">
                {t('description')}
              </p>
              <p className="text-base lg:text-2xl font-medium text-secondary tracking-widest lg:mb-2">
                {t('dates')}
              </p>
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-base lg:text-2xl tracking-widestfont-medium text-primary hover:text-accent transition-colors mt-1"
              >
                <MapPin size={24} />
                {t('location')}
              </a>
            </div>
          </div>


           <div className="relative">
            <div className="absolute inset-0 -m-4 rounded-full bg-white/50 blur-2xl pointer-events-none" />
            <button
              onClick={() => setModalOpen(true)}
              className="relative bg-accent text-accent-contrast shadow-white/50 shadow-lg font-semibold text-xl lg:text-3xl py-3 lg:py-5 px-8 lg:px-12 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {t('cta')}
            </button>
          </div>
        </div>
      </div>

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
