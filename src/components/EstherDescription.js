'use client'

import { useTranslations } from 'next-intl';

export default function EstherDescription() {
    //TODO Dejo esto aquí (lo he copiado de la página del año pasado y sumado un año 47+1=48)
    // TODO teníamos anotado esto:
    // - Quién es Esther + Enfermedad
    // Fotitos
    const t = useTranslations('EstherDescription');
    
    return (
        <div>
            <h1
                className="text-4xl font-bold text-center mb-8"
            >
                {t('title')}
            </h1>
            <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="max-w-4xl">
                    <p className="mb-4">{t('bio')}</p>
                    <p className="mb-4">{t('disease')}</p>
                    <p className="mb-4">{t('costs')}</p>
                    <p>{t('event')}</p>
                </div>
                <div>
                    <img src="/images/esther/esther.jpeg" alt="Esther"/>
                </div>
            </div>
        </div>
    );
}