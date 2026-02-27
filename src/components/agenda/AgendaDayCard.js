/**
 * AgendaDayCard
 *
 * Renders a single day selector card.
 * Used in two contexts:
 *   - Mobile: horizontal carousel item
 *   - Desktop: vertical sidebar item
 *
 * Props:
 *   date     {string}   ISO date string, e.g. '2025-03-31'
 *   locale   {string}   Current locale for Intl formatting, e.g. 'es'
 *   isActive {boolean}  Whether this day is currently selected
 *   onClick  {Function} Called when the card is clicked
 */
export default function AgendaDayCard({ date, locale, isActive, onClick }) {
    const dateObj = new Date(date + 'T00:00:00'); // avoid timezone shifting

    const dayNumber = dateObj.getDate();

    const dayName = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(dateObj);
    const dayNameCapitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    const monthShort = new Intl.DateTimeFormat(locale, { month: 'short' }).format(dateObj);
    const monthCapitalized = monthShort.charAt(0).toUpperCase() + monthShort.slice(1).replace('.', '');

    return (
        <button
            onClick={onClick}
            className={[
                'flex flex-col items-center justify-center rounded-xl px-3 py-3 transition-all duration-200 cursor-pointer select-none hover:scale-105',
                // Mobile: fixed width so the carousel scrolls nicely
                'min-w-18 md:min-w-0',
                // Desktop: full width of the sidebar column
                'md:w-full md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3',
                isActive
                    ? 'bg-accent text-accent-contrast shadow-md'
                    : 'bg-card text-secondary hover:bg-accent/10 hover:text-accent',
            ].join(' ')}
            aria-pressed={isActive}
        >
            {/* Day number */}
            <span className="text-3xl font-extrabold leading-none md:text-2xl">
                {dayNumber}
            </span>

            {/* Day name + month */}
            <span className="flex flex-col items-center md:items-start mt-1 md:mt-0">
                <span className="text-xs font-semibold uppercase tracking-wide leading-tight">
                    {dayNameCapitalized}
                </span>
                <span className={[
                    'text-xs leading-tight',
                    isActive ? 'text-accent-contrast/70' : 'text-primary-mute',
                ].join(' ')}>
                    {monthCapitalized}
                </span>
            </span>
        </button>
    );
}
