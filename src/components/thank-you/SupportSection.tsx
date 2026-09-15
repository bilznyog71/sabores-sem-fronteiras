import React from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../../config/product';
import { Headphones, Mail } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const handleSupportClick = () => {
    trackAnalyticsEvent('support_click', { location: 'support_section' });
  };

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-sm text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-700 mx-auto flex items-center justify-center mb-4 border border-wine-200/60 shadow-xs">
            <Headphones className="w-6 h-6 stroke-[1.8]" />
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
            Precisa de ajuda?
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-600 font-sans-body leading-relaxed mb-6">
            Se você tiver qualquer dificuldade com pagamento ou acesso, fale com nosso suporte.
          </p>

          <div className="mb-4">
            <a
              href={PRODUCT_CONFIG.supportUrl}
              onClick={handleSupportClick}
              id="btn-contact-support"
              className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 active:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 min-h-[48px] rounded-full shadow-md transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span>FALAR COM O SUPORTE</span>
            </a>
          </div>

          <p className="text-xs text-charcoal-500 font-medium">
            Tenha em mãos o e-mail utilizado na compra para facilitar o atendimento.
          </p>

        </div>
      </div>
    </section>
  );
};
