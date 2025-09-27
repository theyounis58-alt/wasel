'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Building2, Users, Truck, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export function CompanyOverview() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const achievements = [
    {
      icon: Building2,
      number: '50+',
      label: isRTL ? 'عميل راضي' : 'Satisfied Clients',
      color: 'text-primary-600 bg-primary-50'
    },
    {
      icon: Users,
      number: '1000+',
      label: isRTL ? 'عامل يومياً' : 'Daily Workers',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Truck,
      number: '25+',
      label: isRTL ? 'مركبة' : 'Vehicles',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Award,
      number: '10+',
      label: isRTL ? 'سنوات خبرة' : 'Years Experience',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {isRTL ? 'من نحن' : 'About WASL'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              {isRTL 
                ? 'واصل هو الاسم التجاري لشركة الصابرين'
                : 'WASL is the Commercial Brand of Al-Sabereen'
              }
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {isRTL
                ? 'تأسست لتكون الحل الأمثل لنقل العمالة والدعم اللوجستي داخل مصر. نحن ملتزمون بتقديم خدمات نقل متكاملة ومهنية تلبي الاحتياجات اليومية للمصانع والشركات.'
                : 'Established to be the ideal solution for workforce transportation and logistical support within Egypt. We are committed to providing integrated, professional transportation services that meet the daily needs of factories and companies.'
              }
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">
                  {isRTL 
                    ? 'أسطول مجهز بالكامل من الميكروباصات ومركبات النقل'
                    : 'Fully equipped fleet of microbuses and transport vehicles'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">
                  {isRTL 
                    ? 'إدارة تشغيلية دقيقة وخطط بديلة تضمن استمرارية العمل'
                    : 'Precise operational management and alternative plans ensuring business continuity'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">
                  {isRTL 
                    ? 'معايير دولية مدعومة بتقنيات حديثة وفريق مدرب'
                    : 'International standards supported by modern technologies and trained team'
                  }
                </p>
              </div>
            </div>

            <Button size="lg" className="inline-flex items-center space-x-2 rtl:space-x-reverse">
              <span>{isRTL ? 'اعرف المزيد عنا' : 'Learn More About Us'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}