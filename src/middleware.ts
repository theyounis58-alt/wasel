import createMiddleware from 'next-intl/middleware';
import {locales} from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'ar',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};