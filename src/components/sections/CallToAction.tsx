'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowLeft, Download, Phone, Mail, MapPin } from 'lucide-react';

export function CallToAction() {
  const t = useTranslations('home.cta');
  const tc = useTranslations('contact.company');
  const ta = useTranslations('actions');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2 rtl:space-x-reverse shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>{t('primary')}</span>
                <ArrowIcon className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Download className="w-5 h-5" />
                <span>{t('secondary')}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              {isRTL ? 'اتصل بنا' : 'Call Us'}
            </h3>
            <p className="text-gray-600 mb-3">
              {isRTL ? 'تواصل مباشر مع فريقنا' : 'Direct contact with our team'}
            </p>
            <a 
              href={`tel:${tc('phone')}`}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              {tc('phone')}
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              {isRTL ? 'راسلنا' : 'Email Us'}
            </h3>
            <p className="text-gray-600 mb-3">
              {isRTL ? 'احصل على رد خلال 24 ساعة' : 'Get response within 24 hours'}
            </p>
            <a 
              href={`mailto:${tc('email')}`}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              {tc('email')}
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              {isRTL ? 'زورنا' : 'Visit Us'}
            </h3>
            <p className="text-gray-600 mb-3">
              {isRTL ? 'مكتبنا في الجيزة' : 'Our office in Giza'}
            </p>
            <p className="text-green-600 font-medium">
              {tc('location')}
            </p>
          </div>
        </div>

        {/* Registration Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 rtl:space-x-reverse bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                {isRTL ? 'شركة مسجلة' : 'Registered Company'}
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              {tc('registration')}
            </span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              {isRTL ? 'رمز النشاط: 5229' : 'Tax Code: 5229'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}