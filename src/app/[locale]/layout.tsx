import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/config';
import './globals.css';

interface Props {
  children: React.ReactNode;
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  return {
    metadataBase: new URL('https://waselalsabreen.com'),
    title: {
      template: locale === 'ar' ? '%s | واصل' : '%s | WASL',
      default: locale === 'ar' ? 'واصل | نقل وتوريد العمالة في مصر' : 'WASL | Workforce Transportation & Manpower in Egypt'
    },
    description: locale === 'ar' 
      ? 'خدمات نقل العمالة والتوريد المهنية في أنحاء مصر. تنقلات يومية، لوجستيات موثوقة، وتشغيل بمستوى مؤسسي.'
      : 'Professional workforce transportation and manpower supply services across Egypt. Daily shuttles, reliable logistics, and enterprise-grade operations.',
    keywords: locale === 'ar'
      ? 'نقل عمالة، توريد عمالة، نقل موظفين، لوجستيات، مصر، ميكروباص، نقل جماعي'
      : 'workforce transportation, manpower supply, employee shuttle, logistics, Egypt, minibus, group transport',
    authors: [{name: 'WASL Team'}],
    creator: 'WASL',
    publisher: 'WASL',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ar': '/ar'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `https://waselalsabreen.com/${locale}`,
      siteName: 'WASL',
      title: locale === 'ar' ? 'واصل | نقل وتوريد العمالة في مصر' : 'WASL | Workforce Transportation & Manpower in Egypt',
      description: locale === 'ar' 
        ? 'خدمات نقل العمالة والتوريد المهنية في أنحاء مصر'
        : 'Professional workforce transportation and manpower supply services across Egypt',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'ar' ? 'واصل | نقل وتوريد العمالة في مصر' : 'WASL | Workforce Transportation & Manpower in Egypt',
      description: locale === 'ar' 
        ? 'خدمات نقل العمالة والتوريد المهنية في أنحاء مصر'
        : 'Professional workforce transportation and manpower supply services across Egypt',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  const messages = await getMessages({locale});
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={`${isRTL ? 'font-arabic' : 'font-sans'} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}