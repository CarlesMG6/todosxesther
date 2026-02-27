import { useTranslations } from 'next-intl';
import Image from 'next/image';

/**
 * AgendaActivityCard
 *
 * Renders a single activity inside a day's schedule.
 *
 * Props:
 *   activity {object}  Activity data from agendaData.js
 *   untilLabel {string} Translated label for "hasta" / "until" / "fins a"
 */
export default function AgendaActivityCard({ activity, untilLabel }) {
    const { startTime, endTime, image, name, location, description } = activity;
    const t = useTranslations('Agenda');

    const timeDisplay = startTime ?
    (    endTime
        ? `${startTime} – ${endTime}`
        : startTime
    ) : t('allDay');


    return (
        <article className="flex gap-4 bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Image */}
            <div className="relative w-28 shrink-0 sm:w-36">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 144px"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-1 py-3 pr-4">
                {/* Time badge */}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5 w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {timeDisplay}
                </span>

                {/* Activity name */}
                <h3 className="text-sm font-bold text-primary leading-snug sm:text-base">
                    {name}
                </h3>

                {/* Location */}
                <span className="inline-flex items-center gap-1 text-xs text-primary-mute">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3 shrink-0"
                        aria-hidden="true"
                    >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    {location}
                </span>

                {/* Description */}
                <p className="text-xs text-primary-mute leading-relaxed line-clamp-2 sm:text-sm">
                    {description}
                </p>
            </div>
        </article>
    );
}
