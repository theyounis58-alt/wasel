'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { 
  Award, 
  Users, 
  Shield, 
  Clock, 
  Truck, 
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';

export function WhyChooseUs() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const reasons = [
    {
      icon: Award,
      title: isRTL ? 'خبرة 10+ سنوات' : '10+ Years Experience',
      description: isRTL 
        ? 'خبرة واسعة في مجال نقل العمالة والخدمات اللوجستية'
        : 'Extensive experience in workforce transportation and logistics services',
      color: 'text-primary-600 bg-primary-50'
    },
    {
      icon: Users,
      title: isRTL ? 'فريق محترف' : 'Professional Team',
      description: isRTL 
        ? 'سائقون مدربون ومنسقو خطوط ومديرو عمليات متخصصون'
        : 'Trained drivers, route coordinators, and specialized operations managers',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Shield,
      title: isRTL ? 'تأمين شامل' : 'Comprehensive Insurance',
      description: isRTL 
        ? 'تغطية تأمينية كاملة للركاب والمركبات'
        : 'Full insurance coverage for passengers and vehicles',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Clock,
      title: isRTL ? 'انضباط 98%' : '98% Punctuality',
      description: isRTL 
        ? 'معدل التزام عالي بالمواعيد والجداول الزمنية'
        : 'High commitment rate to schedules and timelines',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: Truck,
      title: isRTL ? 'أسطول حديث' : 'Modern Fleet',
      description: isRTL 
        ? 'مركبات حديثة مجهزة بأحدث التقنيات'
        : 'Modern vehicles equipped with latest technologies',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Phone,
      title: isRTL ? 'دعم 24/7' : '24/7 Support',
      description: isRTL 
        ? 'خدمة عملاء وحلول طوارئ على مدار الساعة'
        : 'Customer service and emergency solutions around the clock',
      color: 'text-red-600 bg-red-50'
    }
  ];

  const stats = [
    { number: '50+', label: isRTL ? 'عميل راضي' : 'Satisfied Clients' },
    { number: '1000+', label: isRTL ? 'عامل يومياً' : 'Daily Workers' },
    { number: '30+', label: isRTL ? 'خط يومي' : 'Daily Routes' },
    { number: '98%', label: isRTL ? 'معدل الرضا' : 'Satisfaction Rate' }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            {isRTL ? 'لماذا واصل؟' : 'Why Choose WASL?'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            {isRTL 
              ? 'الشريك الموثوق لحلول النقل'
              : 'Your Trusted Transportation Partner'
            }
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نحن نقدم أكثر من مجرد خدمة نقل - نحن شريكك في النجاح'
              : 'We provide more than just transportation service - we are your partner in success'
            }
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {isRTL ? 'أرقام تتحدث عن نفسها' : 'Numbers That Speak for Themselves'}
            </h3>
            <p className="text-primary-100 text-lg">
              {isRTL 
                ? 'إنجازاتنا وثقة عملائنا هي أفضل دليل على جودة خدماتنا'
                : 'Our achievements and client trust are the best proof of our service quality'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-primary-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              {isRTL ? 'ضمان الجودة والموثوقية' : 'Quality & Reliability Assurance'}
            </h3>
            <div className="space-y-4">
              {[
                isRTL ? 'فواتير إلكترونية وعقود موثقة' : 'Electronic invoices and documented contracts',
                isRTL ? 'صيانة دورية ووقائية للأسطول' : 'Regular and preventive fleet maintenance',
                isRTL ? 'تدريب مستمر للسائقين والفرق' : 'Continuous training for drivers and teams',
                isRTL ? 'نظام تتبع GPS متقدم' : 'Advanced GPS tracking system',
                isRTL ? 'خطط طوارئ وبدائل جاهزة' : 'Emergency plans and ready alternatives'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-secondary-900 mb-4">
                {isRTL ? 'شهادة الجودة' : 'Quality Certificate'}
              </h4>
              <p className="text-gray-600 mb-6">
                {isRTL 
                  ? 'معتمدون من قبل كبرى الشركات المصرية والعالمية'
                  : 'Certified by major Egyptian and international companies'
                }
              </p>
              <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {isRTL ? 'تقييم 5 نجوم من عملائنا' : '5-star rating from our clients'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}