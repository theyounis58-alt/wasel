import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

interface Props {
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'seo.clients'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ClientsPage({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'clients'});

  const clients = [
    {
      name: 'Egyptian Railways Medical Center',
      sector: 'Healthcare',
      services: 'Daily staff transportation, medical equipment logistics'
    },
    {
      name: 'Fugro (Global)',
      sector: 'Engineering & Consulting',
      services: 'Field team transportation, project logistics support'
    },
    {
      name: 'Sankrit Egypt',
      sector: 'Manufacturing',
      services: 'Workforce transportation, warehouse operations'
    },
    {
      name: 'Microsoft Egypt (Nasr City)',
      sector: 'Technology',
      services: 'Employee shuttle services, event transportation'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="pt-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('intro')}
            </p>
          </div>
        </Section>

        {/* Clients Grid */}
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(t.raw('clientList')).map(([key, client]: [string, any], index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {client.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium mb-3">
                      {client.sector}
                    </p>
                    <p className="text-gray-600">
                      {client.services}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('testimonials.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary-50">
              <div className="text-4xl text-primary-500 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                {t('testimonials.testimonial1.text')}
              </p>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">{t('testimonials.testimonial1.author')}</p>
                  <p className="text-sm text-gray-600">{t('testimonials.testimonial1.company')}</p>
                </div>
              </div>
            </Card>

            <Card className="bg-blue-50">
              <div className="text-4xl text-blue-500 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                {t('testimonials.testimonial2.text')}
              </p>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">H</span>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">{t('testimonials.testimonial2.author')}</p>
                  <p className="text-sm text-gray-600">{t('testimonials.testimonial2.company')}</p>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}