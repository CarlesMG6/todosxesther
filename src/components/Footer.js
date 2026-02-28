'use client'

import { useTranslations } from 'next-intl';
import { COMPANY_SOCIALS } from "./config";
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-primary-foreground py-8 mt-16 flex flex-col items-center gap-6">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-4xl mx-auto mb-2 px-4 gap-4">
        {/* Botones arriba en mobile, a la derecha en desktop */}
        <div className="w-full flex flex-row justify-center lg:justify-end gap-4 order-1 lg:order-2 mb-4 lg:mb-0 text-accent-contrast">
          <Link
            href="/donaciones"
            className="px-6 py-3 bg-accent rounded-full font-bold text-md shadow hover:scale-110 hover:shadow-xl transition-all"
          >
            {t('helpButton')}
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 bg-background text-primary rounded-full font-bold text-md shadow hover:scale-110 hover:shadow-xl transition-all"
          >
            {t('contactButton')}
          </Link>
        </div>
        {/* Socials debajo de los botones en mobile, a la izquierda en desktop */}
        <div className="w-full flex flex-row justify-center lg:justify-start gap-6 order-2 lg:order-1">
          {COMPANY_SOCIALS.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary hover:scale-150 hover:shadow-xl transition-all">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <hr className="w-full max-w-3xl border-t border-primary/10" />
      <div className="text-xs text-secondary">{t('copyright', { year: new Date().getFullYear() })}</div>
    </footer>
  );
}
