'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.fleet'), href: `/${locale}/fleet` },
    { name: t('nav.clients'), href: `/${locale}/clients` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ];

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const currentPath = pathname.replace(`/${locale}`, '');
  const localeUrl = `/${otherLocale}${currentPath}`;

  return (
    <nav className="bg-primary-500 shadow-sm sticky top-0 z-50 py-1">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 rtl:space-x-reverse">
            <Image 
              src="/images/logo1.png" 
              alt="logo" 
              width={200} 
              height={200}
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 text-white',
                    isActive
                      ? 'text-white'
                      : 'text-white hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <Link
              href={localeUrl}
              className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-white hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{t('nav.language')}</span>
            </Link>
            
            <Button size="sm" className="bg-white text-primary-600">
              {t('actions.requestQuote')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-white-700 hover:text-primary-600 hover:bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-white hover:text-primary-600 hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link
                  href={localeUrl}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-base font-medium text-white hover:text-primary-600 bg-white"
                >
                  <Globe className="w-5 h-5" />
                  <span>{t('nav.language')}</span>
                </Link>
                <div className="px-3 py-2 bg-white">
                  <Button size="sm" className="w-full">
                    {t('actions.requestQuote')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}