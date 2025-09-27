'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Globe, Send } from 'lucide-react';
import { validateEmail, validatePhone } from '@/lib/utils';

interface FormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('contact.form.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.required');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.invalidEmail');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.required');
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('contact.form.invalidPhone');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.company.phone'),
      value: t('contact.company.phone'),
      href: `tel:${t('contact.company.phone')}`
    },
    {
      icon: Mail,
      label: t('contact.company.email'),
      value: t('contact.company.email'),
      href: `mailto:${t('contact.company.email')}`
    },
    {
      icon: Globe,
      label: t('contact.company.website'),
      value: t('contact.company.website'),
      href: `https://${t('contact.company.website')}`
    },
    {
      icon: MapPin,
      label: t('contact.company.location'),
      value: t('contact.company.location'),
      href: '#'
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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </Section>

        {/* Contact Content */}
        <Section background="gray">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Information */}
            <div>
              <Card>
                <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
                  {t('contact.company.name')}
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                          {item.href.startsWith('#') ? (
                            <p className="font-medium text-secondary-800">{item.value}</p>
                          ) : (
                            <a
                              href={item.href}
                              className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <p className="text-gray-500">{t('contact.map')}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
                  {t('contact.sendMessage')}
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{t('contact.form.success')}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{t('contact.form.error')}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.fullName ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.phone')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>{isSubmitting ? t('contact.sending') : t('contact.form.submit')}</span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}