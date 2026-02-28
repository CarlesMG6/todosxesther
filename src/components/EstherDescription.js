'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Heart } from 'lucide-react';

export default function EstherDescription() {
    const t = useTranslations('EstherDescription');

    return (
        <article className="w-full max-w-4xl mx-auto">
            {/* ── Title ── */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
                {t('title')}
            </h1>

            {/* ── Section 1: Bio + photo side by side ── */}
            <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
                <div className="flex-1 order-2 md:order-1">
                    <p className="text-lg leading-relaxed text-secondary">
                        {t('bio')}
                    </p>
                </div>
                <div className="w-full md:w-2/5 order-1 md:order-2 shrink-0">
                    <Image
                        src="/images/esther/esther.jpeg"
                        alt="Esther"
                        width={500}
                        height={600}
                        className="w-full rounded-2xl object-cover shadow-lg"
                    />
                </div>
            </section>

            {/* ── Pull quote ── */}
            <div className="bg-pale-pink rounded-2xl px-8 py-10 mb-16 text-center">
                <Heart className="mx-auto mb-4 text-accent" size={32} />
                <blockquote className="text-xl md:text-2xl font-semibold text-accent italic max-w-2xl mx-auto">
                    &ldquo;{t('quote')}&rdquo;
                </blockquote>
            </div>

            {/* ── Section 2: Disease info ── */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    {t('diseaseTitle')}
                </h2>
                <p className="text-lg leading-relaxed text-secondary">
                    {t('disease')}
                </p>
            </section>

            {/* ── Section 3: Costs — contrasting background ── */}
            <section className="bg-pale-orange rounded-2xl px-8 py-10 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {t('costsTitle')}
                </h2>
                <p className="text-lg leading-relaxed text-secondary">
                    {t('costs')}
                </p>
            </section>

            {/* ── Section 4: Event + CTA ── */}
            <section className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    {t('eventTitle')}
                </h2>
                <p className="text-lg leading-relaxed text-secondary max-w-2xl mx-auto mb-8">
                    {t('event')}
                </p>
                <Link
                    href="/donaciones"
                    className="inline-block bg-accent text-accent-contrast font-semibold text-lg py-3 px-8 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                    {t('cta')}
                </Link>
            </section>
        </article>
    );
}