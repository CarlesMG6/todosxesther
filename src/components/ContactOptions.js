'use client'

import { useTranslations } from 'next-intl';
import { COMPANY_SOCIALS } from './config';

export default function ContactOptions() {
    const t = useTranslations('ContactOptions');
    
    return (
        <div className="w-full max-w-5xl mx-auto mt-12 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-4 text-center">{t('title')}</h3>
            <div className="flex gap-6 mb-8">
                {COMPANY_SOCIALS.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary hover:scale-150 hover:shadow-xl transition-all">
                    {s.icon}
                </a>
                ))}
            </div>
        </div>
    )
}
