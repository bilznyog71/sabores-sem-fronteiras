import React from 'react';
import type { OrderStatus } from '../../config/product';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../../config/product';
import { ArrowRight, Clock, Compass } from 'lucide-react';

interface FinalAccessCtaProps {
  status: OrderStatus;
  orderId?: string;
}

export const FinalAccessCta: React.FC<FinalAccessCtaProps> = ({ status, orderId }) => {
  const handleFinalAccessClick = () => {
    trackAnalyticsEvent('access_product_click', {
      location: 'final_thank_you_cta',
      orderId,
    });
  };

  if (status === 'failed') return null;

  return (
    <section className="py-14 sm:py-20 bg-charcoal-900 text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {status === 'approved' && (
          <>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wine-900/80 border border-wine-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-5">
              <Compass className="w-3.5 h-3.5" />
              <span>Sua Cozinha, Seu Destino</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-4xl font-bold leading-tight mb-4">
              Pronto para escolher sua primeira receita?
            </h2>

            <p className="text-xs sm:text-base text-cream-200 font-sans-body mb-8 max-w-lg mx-auto leading-relaxed">
              O material digital já está disponível para você abrir no seu celular, tablet ou computador.
            </p>

            <div>
              <a
                href={PRODUCT_CONFIG.productAccessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFinalAccessClick}
                id="btn-final-access-product"
                className="inline-flex items-center justify-center gap-2.5 bg-wine-600 hover:bg-wine-500 active:bg-wine-700 text-white font-bold text-base sm:text-lg px-8 py-4 min-h-[48px] rounded-full shadow-xl shadow-wine-950/50 hover:shadow-2xl transition-all duration-200 group"
              >
                <span>ACESSAR O {PRODUCT_CONFIG.name.toUpperCase()}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </>
        )}

        {(status === 'pending' || status === 'unknown') && (
          <>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800 border border-charcoal-700 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-5">
              <Clock className="w-3.5 h-3.5" />
              <span>Em Processamento</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold leading-tight mb-4">
              Assim que o pagamento for confirmado, seu acesso será liberado.
            </h2>

            <p className="text-xs sm:text-sm text-cream-300 font-sans-body max-w-md mx-auto leading-relaxed">
              Você não precisa se preocupar. Uma notificação com o link de acesso será enviada automaticamente para o e-mail informado na compra.
            </p>
          </>
        )}

      </div>
    </section>
  );
};
