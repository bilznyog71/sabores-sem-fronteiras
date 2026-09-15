import React from 'react';
import { Headphones, Mail } from 'lucide-react';
import { SUPPORT_URL, trackAnalyticsEvent } from '../../config/product';

export const ThankYouSupportSection: React.FC = () => {
  const handleSupportClick = () => {
    trackAnalyticsEvent('support_click', { location: 'support_section' });
  };

  return (
    <section aria-label="Suporte" className="py-10 sm:py-12 bg-cream-50">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-xs text-center">
          
          <div className="w-11 h-11 rounded-2xl bg-wine-50 text-wine-700 mx-auto flex items-center justify-center mb-3.5 border border-wine-100">
            <Headphones className="w-5 h-5 stroke-[1.8]" />
          </div>

          <h2 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal-900 mb-2">
            Teve algum problema?
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-600 font-sans-body leading-relaxed mb-6">
            Se tiver dificuldade para acessar ou baixar o seu material, entre em contato com nosso suporte.
          </p>

          <a
            href={SUPPORT_URL}
            onClick={handleSupportClick}
            id="btn-contact-support"
            className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 active:bg-black text-white font-bold text-xs sm:text-sm px-7 py-3.5 min-h-[48px] rounded-full shadow-sm transition-all active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>FALAR COM O SUPORTE</span>
          </a>

        </div>
      </div>
    </section>
  );
};
