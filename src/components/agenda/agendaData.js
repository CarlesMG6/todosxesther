/**
 * Tournament agenda data.
 * Each day has a date (used to derive day number and day name via Intl.DateTimeFormat)
 * and an array of activities.
 *
 * Activity fields:
 *   id       – unique string (also used as translation key)
 *   startTime – 'HH:MM'
 *   endTime   – 'HH:MM' | null
 *   image     – path under /public (e.g. '/images/tennis.png')
 *   
 * Note: name, location, and description are now translated using the id as key
 * in AgendaActivities.{id}.{field} from i18n files
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
            },
            {
                id: 'act-1-2',
                image: '/images/rifa.png',
            },
            {
                id: 'act-1-3',
                startTime: '18:00',
                endTime: '22:00',
                image: '/images/padel.jpg',
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
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
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
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
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
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
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
            },
            {
                id: 'act-2-2',
                image: '/images/rifa.png',
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
            },
            {
                id: 'act-6-2',
                startTime: '08:00',
                endTime: '12:00',
                image: '/images/rifa.png',
            },
            {
                id: 'act-6-3',
                startTime: '20:00',
                endTime: '02:00',
                image: '/images/dj.png',
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
            },
            {
                id: 'act-7-2',
                image: '/images/concert.png',
            },
            {
                id: 'act-7-3',
                image: '/images/trophy.jpg',
            },
        ],
    },
];
