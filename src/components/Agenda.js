'use client'

import { useTranslations } from 'next-intl';

export default function Agenda() {
    // TODO https://clubesportiuvalldoreix.com/ca/
        const t = useTranslations('Agenda');
    return (
        <div>
            <h1
                className="text-4xl font-bold text-center mb-8"
            >
                {t('title')}
            </h1>
            <div className="max-w-4xl">
                <p className="mb-4">{t('surprises')}</p>
                <p className="mb-4">{t('food')}</p>
                <p className="mb-4">{t('raffle')}</p>
                <p>{t('location')}</p>
            </div>
        </div>
    )
}
