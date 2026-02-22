'use client'

import { useTranslations } from 'next-intl';

export default function EstherDescription() {
    //TODO Dejo esto aquí (lo he copiado de la página del año pasado y sumado un año 47+1=48)
    // TODO teníamos anotado esto:
    // - Quién es Esther + Enfermedad
    // Fotitos
    const t = useTranslations('DescripcionEsther');

    return (
        <div>
            <h1
                className="text-4xl font-bold text-center mb-8"
            >
                {t('titulo')}
            </h1>
            <div className="max-w-4xl">
                <p className="mb-4">{t('biografia')}</p>
                <p className="mb-4">{t('enfermedad')}</p>
                <p className="mb-4">{t('costos')}</p>
                <p>{t('evento')}</p>
            </div>
        </div>
    );
}