import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Truck, Bus, Wrench, Shield } from 'lucide-react';

interface Props {
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'seo.fleet'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function FleetPage({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'fleet'});

  const fleetCards = [
    {
      key: 'minibuses',
      icon: Truck,
      color: 'text-primary-600 bg-primary-50',
      capacity: '14-16 passengers'
    },
    {
      key: 'jumbo', 
      icon: Bus,
      color: 'text-blue-600 bg-blue-50',
      capacity: '28-33 passengers'
    },
    {
      key: 'maintenance',
      icon: Wrench,
      color: 'text-orange-600 bg-orange-50',
      capacity: 'Preventive care'
    },
    {
      key: 'insurance',
      icon: Shield,
      color: 'text-green-600 bg-green-50',
      capacity: 'Full coverage'
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
              {t('description')}
            </p>
          </div>
        </Section>

        {/* Fleet Cards */}
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.key} className="text-center">
                  <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`cards.${card.key}`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {card.capacity}
                  </p>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-500 italic">
              {t('note')}
            </p>
          </div>
        </Section>

        {/* Features */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('features.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: 'gps',
                icon: '📍'
              },
              {
                key: 'maintenance',
                icon: '🔧'
              },
              {
                key: 'insurance',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`features.${feature.key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}