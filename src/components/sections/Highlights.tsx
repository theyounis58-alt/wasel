'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Users, Truck, Wrench } from 'lucide-react';

export function Highlights() {
  const t = useTranslations('home.highlights');

  const highlights = [
    {
      icon: Users,
      key: 'manpower',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Truck,
      key: 'transportation',
      color: 'text-primary-600 bg-primary-50'
    },
    {
      icon: Wrench,
      key: 'support',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card key={highlight.key} className="text-center">
                <div className={`w-16 h-16 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t(`${highlight.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${highlight.key}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}