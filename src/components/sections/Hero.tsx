'use client';

import React from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Button} from '@/components/ui/Button';
import {ArrowRight, ArrowLeft, Truck, Users, Shield, Phone, CheckCircle, Award} from 'lucide-react';

export function Hero() {
  const t = useTranslations('home.hero');
  const ta = useTranslations('actions');
  const tf = useTranslations('home.features');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%230C5F3D&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-300 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Announcement Banner */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 rtl:ml-2 rtl:mr-0 animate-pulse"></div>
                {t('announcement')}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-secondary-700 mb-6 leading-tight">
              {t('title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {tf('onTime')}
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {tf('professional')}
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {tf('insured')}
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {tf('backup')}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="inline-flex items-center space-x-2 rtl:space-x-reverse shadow-lg hover:shadow-xl transition-shadow">
                <span>{ta('requestQuote')}</span>
                <ArrowIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2">
                {ta('learnMore')}
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-600 hover:text-primary-700">
                {ta('downloadProfile')}
              </Button>
            </div>
          </div>

          {/* Visual Dashboard */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Dashboard Card */}
              <div className="col-span-2 bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-secondary-900">
                      {isRTL ? 'لوحة التحكم' : 'Operations Dashboard'}
                    </h3>
                    <p className="text-gray-600">
                      {isRTL ? 'العمليات اليومية' : 'Daily Operations'}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-medium text-primary-600">٣٠+</div>
                    <div className="text-sm text-gray-600">{isRTL ? 'خطوط يومية' : 'Daily Routes'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-primary-600">٥٠٠+</div>
                    <div className="text-sm text-gray-600">{isRTL ? 'عامل' : 'Workers'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-primary-600">٩٨%</div>
                    <div className="text-sm text-gray-600">{isRTL ? 'الالتزام' : 'On-time'}</div>
                  </div>
                </div>
              </div>

              {/* Fleet Card */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg p-6 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{isRTL ? 'الأسطول' : 'Fleet'}</h4>
                    <p className="text-sm opacity-90">{isRTL ? 'مركبات حديثة' : 'Modern Vehicles'}</p>
                  </div>
                </div>
                <div className="text-2xl font-medium">25+</div>
              </div>

              {/* Experience Card */}
              <div className="bg-[#d2b370] rounded-xl shadow-lg p-6 text-white transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{isRTL ? 'الخبرة' : 'Experience'}</h4>
                    <p className="text-sm opacity-90">{isRTL ? 'سنوات' : 'Years'}</p>
                  </div>
                </div>
                <div className="text-2xl font-medium">10+</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {isRTL ? 'فواتير إلكترونية' : 'E-Invoicing'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {isRTL ? 'عقود موثقة' : 'Documented Contracts'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">
                  {isRTL ? 'رقم تسجيل' : 'Reg #684453452'}
                </span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-200 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
