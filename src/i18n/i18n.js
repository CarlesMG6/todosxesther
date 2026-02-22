import {routing} from './routing';

export function isValidLocale(locale) {
  return routing.locales.includes(locale);
}