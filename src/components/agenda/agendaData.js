/**
 * Tournament agenda data.
 * Each day has a date (used to derive day number and day name via Intl.DateTimeFormat)
 * and an array of activities.
 *
 * Activity fields:
 *   id       – unique string
 *   startTime – 'HH:MM'
 *   endTime   – 'HH:MM' | null
 *   image     – path under /public (e.g. '/images/tennis.png')
 *   name      – activity title
 *   location  – venue / court
 *   description – one-liner teaser
 */

export const AGENDA_DAYS = [
    {
        id: 'day-1',
        date: '2026-04-20', // Sunday
        activities: [
            {
                id: 'act-1-1',
                startTime: '17:00',
                endTime: '20:00',
                image: '/images/concert.png',
                name: 'Inauguración del torneo',
                location: 'Pista central – CEV',
                description: 'Bienvenida oficial, presentación de equipos y apertura de la semana solidaria.',
            },
            {
                id: 'act-1-2',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            },
            {
                id: 'act-1-3',
                startTime: '18:00',
                endTime: '22:00',
                image: '/images/padel.jpg',
                name: 'Primera ronda de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Inicio de los partidos en todas las categorías.',
            },
            
        ],
    },
    {
        id: 'day-2',
        date: '2026-04-21', // Monday
        activities: [
            {
                id: 'act-2-1',
                startTime: '18:00',
                endTime: '22:00',
                image: '/images/padel.jpg',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Continuación de la fase de grupos.',
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            }
        ],
    },
    {
        id: 'day-3',
        date: '2026-04-22', // Tuesday
        activities: [
            {
                id: 'act-2-1',
                startTime: '18:00',
                endTime: '22:00',
                image: '/images/padel.jpg',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Continuación de la fase de grupos.',
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            }
        ],
    },
    {
        id: 'day-4',
        date: '2026-04-23', // Wednesday
        activities: [
            {
                id: 'act-2-1',
                startTime: '18:00',
                endTime: '22:00',
                image: '/images/padel.jpg',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Continuación de la fase de grupos.',
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            }
        ],
    },
    {
        id: 'day-5',
        date: '2026-04-24', // Thursday
        activities: [
            {
                id: 'act-2-1',
                startTime: '17:30',
                endTime: '22:30',
                image: '/images/padel.jpg',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Continuación de la fase de grupos.',
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            }
        ],
    },
    {
        id: 'day-6',
        date: '2026-04-25', // Friday
        activities: [
            {
                id: 'act-6-1',
                startTime: '09:00',
                endTime: '22:45',
                image: '/images/padel.jpg',
                name: 'Semifinales',
                location: 'Pistas de pádel – CEV',
                description: 'Las semifinales de todas las categorías.',
            },
            {
                id: 'act-6-2',
                startTime: '08:00',
                endTime: '12:00',
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Última oportunidad para comprar papeletas antes del sorteo del domingo.',
            },
            {
                id: 'act-6-3',
                startTime: '20:00',
                endTime: '02:00',
                image: '/images/dj.png',
                name: 'Gran fiesta solidaria',
                location: 'Village – CEV',
                description: 'La gran noche del torneo: música, baile, DJ y mucho más. ¡No te la pierdas!',
            },
        ],
    },
    {
        id: 'day-7',
        date: '2026-04-26', // Saturday
        activities: [
            {
                id: 'act-7-1',
                startTime: '09:00',
                endTime: '15:00',
                image: '/images/padel.jpg',
                name: 'Finales',
                location: 'Pista central – CEV',
                description: 'Las finales de todas las categorías con aforo libre.',
            },
            {
                id: 'act-7-3',
                image: '/images/concert.png',
                name: 'Conciertos y DJ',
                location: 'CEV',
                description: 'Conciertos durante el día y música en directo.',
            },
            {
                id: 'act-7-3',
                image: '/images/trofeo.jpg',
                name: 'Entrega de trofeos y clausura',
                location: 'Pista central – CEV',
                description: 'Ceremonia de clausura, entrega de trofeos y discurso de agradecimiento.',
            },
        ],
    },
];
