'use client'

import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const REGLAMENTO_PDF = '/4_Torneo_solidario_pádel_TXE_NORMATIVA.pdf';

export default function TermsPage() {
  const t = useTranslations('Terms');

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Header />

        <main className="flex grow w-full flex-col items-start pt-32 pb-16 px-6 max-w-3xl mx-auto gap-10">
        <h1 className="text-3xl font-bold text-primary">{t('title')}</h1>

        {/* Derechos de imagen */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-primary">{t('imageRightsTitle')}</h2>
          <p className="text-secondary leading-relaxed">{t('imageRightsContent')}</p>
        </section>

        {/* Aceptación del reglamento */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-primary">{t('regulationTitle')}</h2>
          <p className="text-secondary leading-relaxed">
            {t.rich('regulationContent', {
              reglamento: (chunks) => (
                <a
                  href={REGLAMENTO_PDF}
                  download
                  className="text-accent font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
                >
                  {chunks}
                </a>
              ),
              reglament: (chunks) => (
                <a
                  href={REGLAMENTO_PDF}
                  download
                  className="text-accent font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
                >
                  {chunks}
                </a>
              ),
              regulations: (chunks) => (
                <a
                  href={REGLAMENTO_PDF}
                  download
                  className="text-accent font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <a
            href={REGLAMENTO_PDF}
            download
            className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-accent text-accent-contrast rounded-full font-bold shadow hover:scale-105 hover:shadow-lg transition-all"
          >
            ↓ {t('regulationDownload')}
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
