import React from 'react';
import { CUISINE_CHIPS } from '../../config/product';
import { Compass } from 'lucide-react';

export const FirstAccessTip: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-cream-100/50 border-t border-cream-200/70">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="w-10 h-10 rounded-full bg-wine-50 text-wine-700 mx-auto flex items-center justify-center mb-3 border border-wine-200/50 shadow-sm">
          <Compass className="w-5 h-5 stroke-[1.8]" />
        </div>

        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3">
          Não sabe por onde começar?
        </h2>

        <p className="text-xs sm:text-sm sm:text-base text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed mb-6">
          Escolha primeiro uma cozinha que você já gosta — ou faça exatamente o contrário e experimente algo completamente novo.
        </p>

        {/* Chips dos Países com Hover Discreto */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          {CUISINE_CHIPS.map((chip, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-charcoal-800 border border-cream-300 text-xs sm:text-sm font-medium shadow-2xs hover:border-wine-300 hover:text-wine-800 hover:bg-cream-50 transition-all duration-200 cursor-default select-none"
            >
              <span>{chip.flag}</span>
              <span>{chip.name}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
