'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Copy, Check, Medal, Award, Heart, Sparkles, Megaphone, Gift, Package } from 'lucide-react';
import { useState } from 'react';

const IBAN = 'ES93 2100 0423 9902 0055 2994';

function CopyIban({ iban }) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations('Donations');

  const handleCopy = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-2 mt-2">
      <span className="font-mono text-sm md:text-base text-primary select-all">{iban}</span>
      <button
        onClick={handleCopy}
        className="ml-auto shrink-0 p-2 rounded-lg hover:bg-primary-foreground/30 transition-colors cursor-pointer"
        aria-label={t('copyIban')}
      >
        {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-secondary" />}
      </button>
    </div>
  );
}

function HelpCard({ icon, title, description, cta, href, external = false }) {
  const linkClasses = "inline-block mt-auto bg-accent text-accent-contrast font-semibold text-sm py-2 px-5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 text-center";

  return (
    <div className="flex flex-col bg-card rounded-xl p-6 gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-1">
        <div className="p-2 rounded-lg bg-pale-pink text-accent">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
      </div>
      <p className="text-sm text-secondary leading-relaxed flex-1">{description}</p>
      {cta && href && (
        external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
            {cta}
          </a>
        ) : (
          <Link href={href} className={linkClasses}>
            {cta}
          </Link>
        )
      )}
    </div>
  );
}

export default function Donations() {
  const t = useTranslations('Donations');

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">
        {t('title')}
      </h1>
      <p className="text-center text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
        {t('subtitle')}
      </p>

      {/* ───── INDIVIDUAL ───── */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
          {t('individualTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pádel */}
          <HelpCard
            icon={<Medal size={24} />}
            title={t('padelTitle')}
            description={t('padelDesc')}
            cta={t('padelCta')}
            href="/#"
          />

          {/* Tenis */}
          <HelpCard
            icon={<Award size={24} />}
            title={t('tennisTitle')}
            description={t('tennisDesc')}
            cta={t('tennisCta')}
            href="/#"
          />

          {/* Pala 0 */}
          <HelpCard
            icon={<Heart size={24} />}
            title={t('pala0Title')}
            description={t('pala0Desc')}
          />

          {/* Donación IBAN */}
          <div className="flex flex-col bg-card rounded-xl p-6 gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-pale-pink text-accent">
                <Gift size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary">{t('donationTitle')}</h3>
            </div>
            <p className="text-sm text-secondary leading-relaxed">{t('donationDesc')}</p>
            <CopyIban iban={IBAN} />
          </div>

          {/* Talentos */}
          <HelpCard
            icon={<Sparkles size={24} />}
            title={t('talentTitle')}
            description={t('talentDesc')}
            cta={t('talentCta')}
            href={`/contacto?message=${encodeURIComponent(t('talentPrefill'))}`}
          />
        </div>
      </section>

      {/* ───── EMPRESA ───── */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
          {t('companyTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Patrocinio */}
          <HelpCard
            icon={<Megaphone size={24} />}
            title={t('sponsorTitle')}
            description={t('sponsorDesc')}
            cta={t('sponsorCta')}
            href={`/contacto?message=${encodeURIComponent(t('sponsorPrefill'))}`}
          />

          {/* Welcome Pack */}
          <HelpCard
            icon={<Package size={24} />}
            title={t('welcomePackTitle')}
            description={t('welcomePackDesc')}
            cta={t('welcomePackCta')}
            href={`/contacto?message=${encodeURIComponent(t('welcomePackPrefill'))}`}
          />

          {/* Rifa solidaria */}
          <HelpCard
            icon={<Gift size={24} />}
            title={t('raffleTitle')}
            description={t('raffleDesc')}
            cta={t('raffleCta')}
            href={`/contacto?message=${encodeURIComponent(t('rafflePrefill'))}`}
          />
        </div>
      </section>

      {/* ───── TRANSPARENCY ───── */}
      <section className="bg-card rounded-2xl p-6 md:p-8 text-center">
        <p className="text-secondary leading-relaxed max-w-3xl mx-auto">
          {t('transparency')}
        </p>
        <div className="mt-4">
          <CopyIban iban={IBAN} />
        </div>
      </section>
    </div>
  );
}