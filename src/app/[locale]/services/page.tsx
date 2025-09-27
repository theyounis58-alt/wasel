import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Users, Truck, Wrench, Phone } from 'lucide-react';

interface Props {
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'seo.services'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServicesPage({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'services'});

  const services = [
    {
      key: 'manpower',
      icon: Users,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      key: 'transportation',
      icon: Truck,
      color: 'text-primary-600 bg-primary-50'
    },
    {
      key: 'industrial',
      icon: Wrench,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      key: 'emergency',
      icon: Phone,
      color: 'text-red-600 bg-red-50'
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'ar' ? 'حلول شاملة للقوى العاملة مصممة خصيصاً لاحتياجات عملك' : 'Comprehensive workforce solutions tailored to your business needs'}
            </p>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const bullets = t.raw(`${service.key}.bullets`) as string[];
              
              return (
                <Card key={service.key} className="h-full">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">
                    {t(`${service.key}.title`)}
                  </h2>
                  <ul className="space-y-3">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}