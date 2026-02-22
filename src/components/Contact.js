'use client'

import { useTranslations } from 'next-intl';

export default function Contact() {
    // TODO https://clubesportiuvalldoreix.com/ca/
    // TODO teníamos anotado esto:
    // - Formulario de contacto (nombre, email, mensaje)
    // - Información de contacto (email, teléfono, dirección Valldoreix)
        //infotodosconesther@gmail.com
        //+34 629 644 588
    // - Redes sociales (link a instagram, whatsapp, llamada directa, mail directo)
    // - FAQ o sección de preguntas frecuentes (opcional)
    const t = useTranslations('Contact');
    
    return (
        <div>
            <h1
                className="text-4xl font-bold text-center mb-8"
            >
                {t('title')}
            </h1>
            <div className="max-w-4xl w-full">
                {t('comingSoon')}
            </div>
        </div>
    )
}
