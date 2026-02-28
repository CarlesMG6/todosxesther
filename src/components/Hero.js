'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
      <div className="w-full bg-pale-orange">
          <Image
            src="/images/hero_background.png"
            alt="Logo de Todosxesther"
            width={160}         
            height={40}
            className="hidden md:flex w-full object-cover aspect-3/1 object-[5%_45%]" 
            priority
          />
                    <Image
            src="/images/hero_background2.png"
            alt="Logo de Todosxesther"
            width={160}         
            height={40}
            className="flex md:hidden w-full object-cover" 
            priority
          />
      </div>
  );
}
