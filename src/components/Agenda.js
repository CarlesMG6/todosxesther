'use client'

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { AGENDA_DAYS } from './agenda/agendaData';
import AgendaDayCard from './agenda/AgendaDayCard';
import AgendaActivityCard from './agenda/AgendaActivityCard';

export default function Agenda() {
    const t = useTranslations('Agenda');
    const locale = useLocale();

    const [selectedDayId, setSelectedDayId] = useState(AGENDA_DAYS[0].id);

    const selectedDay = AGENDA_DAYS.find((d) => d.id === selectedDayId);

    return (
        <div className="w-full">
            {/* Page title */}
            <h1 className="text-3xl font-bold text-center mb-8">
                {t('title')}
            </h1>

            <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
                {/* Mobile: horizontal scroll carousel */}
                <div className="relative md:hidden">
                    {/* Right fade */}
                    {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10 bg-linear-to-l from-background to-transparent" /> */}
                    <nav
                        aria-label={t('daySelector')}
                        className="
                            flex flex-row gap-2 overflow-x-auto pb-2 mb-6 snap-x snap-mandatory
                            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                        "
                    >
                    {AGENDA_DAYS.map((day) => (
                        <div key={day.id} className="snap-start shrink-0">
                            <AgendaDayCard
                                date={day.date}
                                locale={locale}
                                isActive={day.id === selectedDayId}
                                onClick={() => setSelectedDayId(day.id)}
                            />
                        </div>
                    ))}
                    </nav>
                </div>

                {/* Desktop: vertical sidebar (1/4 width) */}
                <nav
                    aria-label={t('daySelector')}
                    className="hidden md:flex md:flex-col md:gap-2 md:w-1/4 md:sticky md:top-4"
                >
                    {AGENDA_DAYS.map((day) => (
                        <AgendaDayCard
                            key={day.id}
                            date={day.date}
                            locale={locale}
                            isActive={day.id === selectedDayId}
                            onClick={() => setSelectedDayId(day.id)}
                        />
                    ))}
                </nav>
                <section
                    aria-label={t('activitiesLabel')}
                    className="flex flex-col gap-4 flex-1"
                >
                    {selectedDay && selectedDay.activities.length > 0 ? (
                        selectedDay.activities.map((activity) => (
                            <AgendaActivityCard
                                key={activity.id}
                                activity={activity}
                            />
                        ))
                    ) : (
                        <p className="text-primary-mute text-sm py-8 text-center">
                            {t('noActivities')}
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}
