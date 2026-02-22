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
                {t('titulo')}
            </h1>
            <div className="max-w-4xl">
                <p className="mb-4">{t('sorpresas')}</p>
                <p className="mb-4">{t('comida')}</p>
                <p className="mb-4">{t('rifa')}</p>
                <p>{t('ubicacion')}</p>
            </div>
        </div>
    )
}
