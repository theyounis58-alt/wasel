'use client';

import React from 'react';

import { useTranslations, useLocale } from 'next-intl';

export function TrustedBy() {
  const t = useTranslations('home.trusted');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const clients = [
    { name: 'Egyptian Railways Medical Center', logo: 'ER', color: 'bg-blue-500' },
    { name: 'Fugro Global', logo: 'FG', color: 'bg-green-500' },
    { name: 'Sankrit Egypt', logo: 'SE', color: 'bg-orange-500' },
    { name: 'Microsoft Egypt', logo: 'MS', color: 'bg-red-500' },
    { name: 'EMS Microsolutions', logo: 'EM', color: 'bg-purple-500' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            {isRTL ? 'عملاؤنا' : 'Our Clients'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {isRTL ? 'موثوق به من قبل قادة الصناعة' : 'Trusted by Industry Leaders'}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('caption')}
          </p>
          <p className="text-gray-500 mt-2">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${client.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl font-bold text-white">
                    {client.logo}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-green-50 rounded-lg px-4 py-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">
              {isRTL ? 'فواتير إلكترونية معتمدة' : 'Certified E-Invoicing'}
            </span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 rounded-lg px-4 py-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">
              {isRTL ? 'عقود موثقة قانونياً' : 'Legally Documented Contracts'}
            </span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-orange-50 rounded-lg px-4 py-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-orange-700">
              {isRTL ? 'رقم تسجيل #684453452' : 'Registration #684453452'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}