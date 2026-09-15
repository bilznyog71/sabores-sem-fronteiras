import React from 'react';
import { TARGET_AUDIENCE } from '../config/product';
import { Compass, Sparkles, Globe, HeartHandshake } from 'lucide-react';

const ICONS = [Compass, Sparkles, Globe, HeartHandshake];

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-wine-800 mb-3 inline-block">
            Identificação
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
            Feito para quem acredita que cozinhar pode ser muito mais do que preparar uma refeição.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-2xl mx-auto">
            Seja para o jantar de terça-feira ou para uma mesa posta de domingo, a culinária é uma forma de conexão e bem-estar.
          </p>
        </div>

        {/* 4 Cards de Situações com Ícones Lineares Refinados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item, idx) => {
            const Icon = ICONS[idx] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white/80 p-6 sm:p-7 rounded-2xl border border-cream-200/90 shadow-sm hover:shadow-md hover:border-wine-300 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-wine-50 text-wine-700 border border-wine-100 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-charcoal-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-cream-100 text-[11px] font-semibold text-wine-700">
                  Experiência sob medida
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
