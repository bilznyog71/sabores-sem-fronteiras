import React, { useState } from 'react';
import { FAQ_ITEMS, trackAnalyticsEvent } from '../config/product';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackAnalyticsEvent('faq_open', {
        question: FAQ_ITEMS[index].question,
        index,
      });
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-28 bg-cream-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-wine-700" />
            <span>Esclarecimentos</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
            Dúvidas frequentes
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed">
            Tudo o que você precisa saber sobre o material, formato de entrega e acesso às receitas.
          </p>
        </div>

        {/* Accordion Moderno e Suave */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-wine-300 shadow-md'
                    : 'bg-white/70 border-cream-200/90 hover:bg-white hover:border-cream-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700"
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-charcoal-900 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-wine-700 text-white rotate-180' : 'bg-cream-100 text-charcoal-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans-body border-t border-cream-100 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
