import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Target, Eye } from 'lucide-react';

interface Props {
  params: {locale: string};
}

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'seo.about'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="pt-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium text-secondary-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('intro')}
            </p>
          </div>
        </Section>

        {/* Vision & Mission */}
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('vision.content')}
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('mission.content')}
              </p>
            </Card>
          </div>
        </Section>

        {/* Timeline */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-secondary-900 mb-4">
              {t('journey')}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              
              <div className="space-y-12">
                {[
                  { year: '2014', key: '2014' },
                  { year: '2018', key: '2018' },
                  { year: '2021', key: '2021' },
                  { year: '2025', key: '2025' }
                ].map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card>
                        <div className="text-primary-600 font-medium text-xl mb-2">
                          {item.year}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                          {t(`timeline.${item.key}.title`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`timeline.${item.key}.desc`)}
                        </p>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}