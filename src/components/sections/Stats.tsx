'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export function Stats() {
  const t = useTranslations('home.stats');
  const tv = useTranslations('home.values');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { key: 'experience', value: '10+', color: 'text-primary-600' },
    { key: 'clients', value: '50+', color: 'text-blue-600' },
    { key: 'routes', value: '30+', color: 'text-green-600' },
    { key: 'workers', value: '1000+', color: 'text-orange-600' },
    { key: 'vehicles', value: '25+', color: 'text-purple-600' },
    { key: 'onTime', value: '98%', color: 'text-red-600' }
  ];

  return (
    <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'أرقام تتحدث عن نفسها' : 'Numbers That Speak for Themselves'}
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            {isRTL 
              ? 'أرقام تعكس التزامنا بالتميز والموثوقية'
              : 'Numbers that reflect our commitment to excellence and reliability'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.key} className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-primary-100 font-medium">
                {t(stat.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}