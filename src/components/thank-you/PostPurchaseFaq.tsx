import React, { useState } from 'react';
import { POST_PURCHASE_FAQ, trackAnalyticsEvent } from '../../config/product';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const PostPurchaseFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackAnalyticsEvent('faq_open', {
        section: 'thank_you_faq',
        question: POST_PURCHASE_FAQ[index].question,
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-cream-100/50 border-t border-cream-200/70">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-wine-700" />
          <span>Esclarecimentos Rápidos</span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 mb-8">
          Dúvidas sobre o seu acesso
        </h2>

        {/* Accordion Compacto e Fluido */}
        <div className="space-y-3 text-left">
          {POST_PURCHASE_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-wine-300 shadow-md'
                    : 'bg-white/80 border-cream-200/90 hover:bg-white hover:border-cream-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-3 focus:outline-none"
                >
                  <span className="font-editorial text-sm sm:text-base font-bold text-charcoal-900 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-wine-700 text-white rotate-180' : 'bg-cream-100 text-charcoal-500'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body border-t border-cream-100">
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
