import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  const {pathname} = req.nextUrl;

  // Ignorar assets
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return intlMiddleware(req);
  }

  const hasLocale = routing.locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Si NO tiene locale → dejar que next-intl lo detecte y redirija
  if (!hasLocale) {
    return intlMiddleware(req);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};