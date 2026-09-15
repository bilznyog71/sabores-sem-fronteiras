import React from 'react';
import { POST_PURCHASE_STEPS } from '../../config/product';
import { Compass } from 'lucide-react';

export const WhatHappensNowSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-cream-100/60 border-y border-cream-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5 text-wine-700" />
          <span>Próximas etapas</span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 mb-10">
          E agora?
        </h2>

        {/* 3 Colunas no Desktop, Vertical no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {POST_PURCHASE_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-cream-200 shadow-sm flex flex-col justify-between relative group hover:border-wine-300 transition-colors"
            >
              <div>
                {/* Número Grande e Discreto */}
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-wine-700/20 group-hover:text-wine-700/35 transition-colors mb-3">
                  {item.step}
                </div>

                <h3 className="font-editorial text-xl font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-100 text-[11px] font-mono text-charcoal-400 uppercase tracking-wider">
                Passo {item.step}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
