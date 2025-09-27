import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { Features } from '@/components/sections/Features';
import { Stats } from '@/components/sections/Stats';
import { CallToAction } from '@/components/sections/CallToAction';

interface Props {
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'seo.home'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <ServicesOverview />
        <WhyChooseUs />
        <TrustedBy />
        <Features />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}