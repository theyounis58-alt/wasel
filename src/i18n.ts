import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from './config';
import type {Locale} from './config';

export default getRequestConfig(async ({locale}) => {
  // Trust middleware: if undefined, fall back locally (SSR-safe).
  const resolved: Locale | string = typeof locale === 'string' ? locale : 'ar';

  // Try to load messages for the resolved locale, and fall back to default on missing file.
  async function loadMessages(loc: string) {
    try {
      const mod = await import(`./messages/${loc}.json`);
      return mod.default;
    } catch {
      // Fallback to Arabic messages if a locale file is missing
      const mod = await import(`./messages/ar.json`);
      return mod.default;
    }
  }

  return {
    locale: resolved,
    messages: await loadMessages(resolved)
  };
});
