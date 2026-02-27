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
        date: '2025-04-20', // Sunday
        activities: [
            {
                id: 'act-1-1',
                startTime: '10:00',
                endTime: '11:00',
                image: '/images/concert.png',
                name: 'Inauguración del torneo',
                location: 'Pista central – CEV',
                description: 'Bienvenida oficial, presentación de equipos y apertura de la semana solidaria.',
            },
            {
                id: 'act-1-2',
                startTime: '11:30',
                endTime: '14:00',
                image: '/images/tennis.png',
                name: 'Primera ronda de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Inicio de los partidos en todas las categorías.',
            },
            {
                id: 'act-1-3',
                startTime: '16:00',
                endTime: '19:00',
                image: '/images/padel.jpg',
                name: 'Partidos de tarde',
                location: 'Pistas de pádel – CEV',
                description: 'Segunda sesión de partidos de la primera jornada.',
            },
        ],
    },
    {
        id: 'day-2',
        date: '2025-04-21', // Monday
        activities: [
            {
                id: 'act-2-1',
                image: '/images/tennis.png',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Continuación de la fase de grupos.',
            },
            {
                id: 'act-2-2',
                startTime: '12:00',
                endTime: null,
                image: '/images/rifa.png',
                name: 'Venta de papeletas de la tómbola',
                location: 'Village – CEV',
                description: 'Hazte con tus papeletas para la tómbola solidaria del domingo.',
            },
            {
                id: 'act-2-yoga',
                startTime: '09:00',
                endTime: '10:00',
                image: '/images/yoga.png',
                name: 'Yoga matinal',
                location: 'Pista central – CEV',
                description: 'Empieza el día con energía. Sesión de yoga al aire libre abierta a todos.',
            },
            {
                id: 'act-2-3',
                startTime: '18:00',
                endTime: '19:30',
                image: '/images/zumba.png',
                name: 'Clase de Zumba abierta',
                location: 'Pista central – CEV',
                description: 'Sesión de Zumba para todos los niveles. ¡Ven a bailar y sudar por Esther!',
            },
            {
                id: 'act-4-1',
                startTime: '10:00',
                endTime: '14:00',
                image: '/images/padel.jpg',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Cuarta jornada de partidos.',
            },
            {
                id: 'act-4-2',
                startTime: '17:00',
                endTime: '18:30',
                image: '/images/zumba.png',
                name: 'Clase de Zumba abierta',
                location: 'Pista central – CEV',
                description: 'Segunda sesión de Zumba de la semana.',
            },
            {
                id: 'act-4-3',
                startTime: '21:00',
                endTime: '01:00',
                image: '/images/dj.png',
                name: 'Sesión de DJ',
                location: 'Village – CEV',
                description: 'El mejor ambiente con DJ en directo. ¡Ven a disfrutar!',
            },
        ],
    },
    {
        id: 'day-3',
        date: '2025-04-22', // Tuesday
        activities: [
            {
                id: 'act-3-1',
                startTime: '10:00',
                endTime: '14:00',
                image: '/images/tennis.png',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Jornada de miércoles: partidos de mañana.',
            },
            {
                id: 'act-3-2',
                startTime: '16:00',
                endTime: '20:00',
                image: '/images/tennis.png',
                name: 'Partidos de tarde',
                location: 'Pistas de pádel – CEV',
                description: 'Jornada de miércoles: partidos de tarde.',
            },
            {
                id: 'act-3-3',
                startTime: '21:00',
                endTime: '23:00',
                image: '/images/concert.png',
                name: 'Concierto en directo',
                location: 'Village – CEV',
                description: 'Noche musical con artistas invitados. Entrada libre.',
            },
        ],
    },
    {
        id: 'day-4',
        date: '2025-04-23', // Wednesday
        activities: [],
    },
    {
        id: 'day-5',
        date: '2025-04-24', // Thursday
        activities: [
            {
                id: 'act-5-1',
                startTime: '10:00',
                endTime: '14:00',
                image: '/images/tennis.png',
                name: 'Partidos de pádel',
                location: 'Pistas de pádel – CEV',
                description: 'Última jornada de fase de grupos.',
            },
            {
                id: 'act-5-2',
                startTime: '16:00',
                endTime: '20:00',
                image: '/images/padel.jpg',
                name: 'Cuartos de final',
                location: 'Pistas de pádel – CEV',
                description: 'Los mejores de cada categoría se enfrentan en cuartos.',
            },
            {
                id: 'act-5-yoga',
                startTime: '09:00',
                endTime: '10:00',
                image: '/images/yoga2.png',
                name: 'Yoga matinal',
                location: 'Pista central – CEV',
                description: 'Segunda sesión de yoga de la semana. Relax y bienestar antes de los cuartos de final.',
            },
            {
                id: 'act-5-3',
                startTime: '21:00',
                endTime: '23:30',
                image: '/images/concert.png',
                name: 'Actuación musical',
                location: 'Village – CEV',
                description: 'Viernes de música y fiesta solidaria.',
            },
        ],
    },
    {
        id: 'day-6',
        date: '2025-04-25', // Friday
        activities: [
            {
                id: 'act-6-1',
                startTime: '10:00',
                endTime: '14:00',
                image: '/images/tennis.png',
                name: 'Semifinales',
                location: 'Pistas de pádel – CEV',
                description: 'Las semifinales de todas las categorías.',
            },
            {
                id: 'act-6-2',
                startTime: '12:00',
                endTime: null,
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
        date: '2025-04-26', // Saturday
        activities: [
            {
                id: 'act-7-1',
                startTime: '10:30',
                endTime: '13:30',
                image: '/images/tennis.png',
                name: 'Finales',
                location: 'Pista central – CEV',
                description: 'Las finales de todas las categorías con aforo libre.',
            },
            {
                id: 'act-7-2',
                startTime: '13:30',
                endTime: '14:30',
                image: '/images/rifa.png',
                name: 'Tómbola solidaria',
                location: 'Pista central – CEV',
                description: 'Sorteo de la tómbola solidaria en directo. ¡Mucha suerte!',
            },
            {
                id: 'act-7-3',
                startTime: '14:30',
                endTime: '16:00',
                image: '/images/concert.png',
                name: 'Entrega de trofeos y clausura',
                location: 'Pista central – CEV',
                description: 'Ceremonia de clausura, entrega de trofeos y discurso de agradecimiento.',
            },
        ],
    },
];
