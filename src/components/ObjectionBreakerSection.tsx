import React from 'react';
import { THREE_STEPS } from '../config/product';
import { ChefHat, BookMarked, ShoppingBag, Sparkles } from 'lucide-react';

const STEP_ICONS = [BookMarked, ShoppingBag, Sparkles];

export const ObjectionBreakerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream-100/40 border-t border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cabeçalho da Quebra de Objeção */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <ChefHat className="w-3.5 h-3.5 text-wine-700" />
            <span>Simplicidade Prática</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-2">
            Você não precisa ser chef.
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-wine-700 font-semibold mb-4">
            Você só precisa gostar de cozinhar.
          </p>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-2xl mx-auto leading-relaxed">
            Esqueça receitas confusas ou que exigem equipamentos caros. Todo o material foi organizado de forma lógica, com linguagem acessível, para que você execute qualquer prato com naturalidade na sua própria cozinha.
          </p>
        </div>

        {/* 3 Passos com Linha Conectora no Desktop */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Linha Conectora Visual no Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-wine-300 via-gold-400 to-wine-300 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 relative z-10">
            {THREE_STEPS.map((stepItem, idx) => {
              const Icon = STEP_ICONS[idx];
              return (
                <div
                  key={stepItem.step}
                  className="bg-white p-7 rounded-2xl border border-cream-300/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
                >
                  {/* Número / Ícone de Destaque */}
                  <div className="w-14 h-14 rounded-2xl bg-cream-100 border-2 border-wine-700 text-wine-700 flex items-center justify-center font-editorial font-bold text-xl mb-4 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 mb-1 font-mono">
                    {stepItem.subtitle}
                  </span>

                  <h3 className="font-editorial text-xl font-bold text-charcoal-900 mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body max-w-xs">
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
