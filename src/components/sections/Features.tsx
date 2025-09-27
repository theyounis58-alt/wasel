'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Clock, Shield, Wrench, MapPin, CheckCircle } from 'lucide-react';

export function Features() {
  const t = useTranslations('home.features');

  const features = [
    { key: 'onTime', icon: Clock, color: 'text-green-600' },
    { key: 'safety', icon: Shield, color: 'text-blue-600' },
    { key: 'insured', icon: CheckCircle, color: 'text-purple-600' },
    { key: 'backup', icon: Wrench, color: 'text-orange-600' },
    { key: 'tracking', icon: MapPin, color: 'text-red-600' }
  ];

  return (
    <section className="section bg-primary-500 text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.key} className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-medium">{t(feature.key)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}