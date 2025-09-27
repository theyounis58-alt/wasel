'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Users, 
  Truck, 
  Wrench, 
  Phone, 
  Clock, 
  Shield,
  MapPin,
  Settings,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export function ServicesOverview() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Users,
      title: isRTL ? 'توريد العمالة' : 'Manpower Supply',
      description: isRTL 
        ? 'عمال خطوط إنتاج، فرق مستودعات، تغليف ودعم تشغيلي'
        : 'Production line workers, warehouse teams, packaging & operational support',
      features: [
        isRTL ? 'عمال مهرة وغير مهرة' : 'Skilled & unskilled workers',
        isRTL ? 'تزويد سريع وبدائل فورية' : 'Rapid supply & instant replacements',
        isRTL ? 'فرق متخصصة' : 'Specialized teams'
      ],
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: isRTL ? 'نقل العمالة' : 'Workforce Transportation',
      description: isRTL 
        ? 'تنقلات يومية بميكروباصات وجامبو مع انضباط وتأمين كامل'
        : 'Daily shuttles via minibuses & jumbo with punctuality and full insurance',
      features: [
        isRTL ? 'خطوط يومية منتظمة' : 'Regular daily routes',
        isRTL ? 'تتبع GPS' : 'GPS tracking',
        isRTL ? 'بدائل 24/7' : '24/7 backup'
      ],
      color: 'text-primary-600 bg-primary-50 border-primary-200',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Settings,
      title: isRTL ? 'الدعم الصناعي' : 'Industrial Support',
      description: isRTL 
        ? 'منسقو خطوط، مديرو تشغيل، وفرق مستودعات متخصصة'
        : 'Route coordinators, operations managers, and specialized warehouse teams',
      features: [
        isRTL ? 'إدارة العمليات' : 'Operations management',
        isRTL ? 'تنسيق الخطوط' : 'Route coordination',
        isRTL ? 'دعم لوجستي' : 'Logistics support'
      ],
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Phone,
      title: isRTL ? 'حلول الطوارئ' : 'Emergency Solutions',
      description: isRTL 
        ? 'بدائل سائقين وحافلات على مدار الساعة لضمان استمرارية العمل'
        : '24/7 driver and bus replacements to ensure business continuity',
      features: [
        isRTL ? 'استجابة فورية' : 'Instant response',
        isRTL ? 'خطط بديلة' : 'Backup plans',
        isRTL ? 'دعم مستمر' : 'Continuous support'
      ],
      color: 'text-red-600 bg-red-50 border-red-200',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: isRTL ? 'صيانة الأبراج' : 'Tower Maintenance',
      description: isRTL ? 'تشغيل وصيانة الأبراج' : 'Tower operation and maintenance'
    },
    {
      icon: Shield,
      title: isRTL ? 'طاقم طبي' : 'Medical Staff',
      description: isRTL ? 'طاقم طبي مؤهل لإدارة العيادات والمستشفيات' : 'Qualified medical staff for clinics and hospitals'
    },
    {
      icon: MapPin,
      title: isRTL ? 'إدارة المطاعم' : 'Restaurant Management',
      description: isRTL ? 'فريق متخصص لتشغيل وإدارة مشاريع المطاعم' : 'Specialized team for restaurant project operations'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            {isRTL ? 'خدماتنا' : 'Our Services'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            {isRTL 
              ? 'حلول شاملة للقوى العاملة'
              : 'Comprehensive Workforce Solutions'
            }
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات الشركات والمصانع'
              : 'We provide an integrated suite of services designed specifically to meet the needs of companies and factories'
            }
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`border-2 ${service.color} hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            {isRTL ? 'خدمات إضافية' : 'Additional Services'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white" />
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="inline-flex items-center space-x-2 rtl:space-x-reverse">
              <span>{isRTL ? 'استكشف جميع الخدمات' : 'Explore All Services'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: isRTL ? 'انضباط المواعيد' : 'On-time Delivery' },
            { icon: Shield, label: isRTL ? 'تأمين شامل' : 'Full Insurance' },
            { icon: Phone, label: isRTL ? 'دعم 24/7' : '24/7 Support' },
            { icon: MapPin, label: isRTL ? 'تتبع GPS' : 'GPS Tracking' }
          ].map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {guarantee.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}