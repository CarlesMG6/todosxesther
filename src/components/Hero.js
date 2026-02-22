'use client'

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
      <div className="w-full bg-pale-orange h-96">
       <div className="w-full h-full flex items-center justify-center text-center">
        HERO
       </div>
      </div>
  );
}
