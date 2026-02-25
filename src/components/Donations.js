'use client'

import { useTranslations } from 'next-intl';

export default function Donations() {
    //TODO Dejo esto aquí (lo he copiado de la página del año pasado)
    // Link de la vida es chula que estaba en la página tmbn : https://www.facebook.com/lavidaesxula/
    const t = useTranslations('Donations');
    // TODO teníamos anotado esto:
    // - Detalles asociación la vida es xula
    // - Posibilidades de donar () IBAN, Lotería, Pala 0, Torneo, ...
    // IBAN
    return (
        <div>
            <h1
                className="text-4xl font-bold text-center mb-8"
            >
                {t('title')}
            </h1>
            
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-4">
                <button className="w-full px-4 py-30 text-white rounded-full bg-primary-foreground focus:outline-none hover:scale-105 hover:shadow-xl">
                    {t('enterprise')}
                    <img></img>
                </button>
                <button className="w-full px-4 py-30 text-white rounded-full bg-primary-foreground focus:outline-none hover:scale-105 hover:shadow-xl">
                    {t('particular')}
                    <img></img>
                </button>
            </div>
            <div className="max-w-4xl">
                <p className="mb-4">{t('raffle')}</p>
                <p className="mb-4">{t('associationIntro')}</p>
                <p className="mb-4">{t('associationDescription')}</p>
                <p className="mb-4">{t('moneyUsage')}</p>
                <p className="font-mono text-lg">{t('iban')}</p>
            </div>
        </div>
    );
}