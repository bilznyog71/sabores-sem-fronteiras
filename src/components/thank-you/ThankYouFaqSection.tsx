import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { THANK_YOU_FAQ, trackAnalyticsEvent } from '../../config/product';

export const ThankYouFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por conveniência

  const toggleItem = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackAnalyticsEvent('faq_open', { question: THANK_YOU_FAQ[index].question });
    }
  };

  return (
    <section aria-label="Perguntas Frequentes sobre Acesso" className="py-10 sm:py-16 bg-cream-50/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-full bg-wine-50 text-wine-700 mx-auto flex items-center justify-center mb-2.5 border border-wine-100">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900">
            Dúvidas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Respostas rápidas sobre o recebimento e download do seu eBook.
          </p>
        </div>

        {/* Accordion Suave */}
        <div className="space-y-3">
          {THANK_YOU_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-cream-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-sm sm:text-base font-bold text-charcoal-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-cream-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-wine-50 text-wine-700' : 'text-charcoal-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-charcoal-600 font-sans-body leading-relaxed border-t border-cream-100 animate-fadeIn">
                    <p className="mt-3">{item.answer}</p>
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
