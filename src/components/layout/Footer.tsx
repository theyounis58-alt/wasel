'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.fleet'), href: `/${locale}/fleet` },
    { name: t('nav.clients'), href: `/${locale}/clients` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center">
            <Image 
              src="/images/logo3.png" 
              alt="logo" 
              width={200} 
              height={200}
              unoptimized
              priority
            />
          </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.bio')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">{t('contact.company.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">{t('contact.company.email')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">{t('contact.company.location')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
              <Globe className="w-4 h-4 text-primary-400" />
              <span className="text-gray-400 text-sm">
                {t('contact.company.website')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}