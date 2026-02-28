'use client'

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { X } from 'lucide-react';

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
          className="hidden md:block w-full object-cover aspect-12/5 object-[20%_60%]"
          priority
        />
        {/* Background mobile */}
        <Image
          src="/images/hero_background2.png"
          alt="Todos X Esther"
          width={400}
          height={600}
          className="block md:hidden w-full object-cover"
          priority
        />

        {/* Overlay + content */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-foreground/90 from-10% via-primary-foreground/40 via-40% to-transparent flex flex-col items-center justify-between py-10 md:py-12 px-4">
          {/* Title & subtitle */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-accent uppercase">
              {t('title')}
            </h1>
            <p className="text-lg md:text-2xl font-bold text-background">
              {t('description')}
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-accent text-accent-contrast shadow-white/50 shadow-lg font-semibold text-xl md:text-3xl py-3 md:py-5 px-8 md:px-12 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {t('cta')}
          </button>
        </div>
      </div>

      {/* ─── Modal ─── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl md:text-2xl font-medium text-center text-primary mt-4 mb-8">
              {t('modalTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pádel card */}
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

              {/* Tennis card */}
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
