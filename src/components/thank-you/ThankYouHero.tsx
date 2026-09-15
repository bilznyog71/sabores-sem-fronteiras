import React, { useState } from 'react';
import type { OrderStatus } from '../../config/product';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../../config/product';
import { Check, Clock, AlertTriangle, HelpCircle, ArrowRight, RefreshCw, ExternalLink } from 'lucide-react';

interface ThankYouHeroProps {
  status: OrderStatus;
  orderId?: string;
  onRefreshStatus?: () => void;
}

export const ThankYouHero: React.FC<ThankYouHeroProps> = ({
  status,
  orderId,
  onRefreshStatus,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    if (onRefreshStatus) {
      onRefreshStatus();
    }
    setTimeout(() => {
      setIsRefreshing(false);
    }, 900);
  };

  const handleAccessClick = () => {
    trackAnalyticsEvent('access_product_click', {
      orderId,
      location: 'hero_thank_you',
    });
  };

  const handleSupportClick = () => {
    trackAnalyticsEvent('support_click', {
      location: 'hero_failed_or_unknown',
      orderId,
    });
  };

  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* ÍCONE DE STATUS CIRCULAR ELEGANTE (Scale 0.95 -> 1 sutil) */}
        <div className="flex justify-center mb-5 animate-fadeIn">
          {status === 'approved' && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-olive-100/90 text-olive-700 border-2 border-olive-500/30 flex items-center justify-center shadow-md">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
            </div>
          )}

          {status === 'pending' && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-100/90 text-gold-600 border-2 border-gold-400/40 flex items-center justify-center shadow-md">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
            </div>
          )}

          {status === 'failed' && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-100/90 text-wine-700 border-2 border-wine-500/30 flex items-center justify-center shadow-md">
              <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
            </div>
          )}

          {status === 'unknown' && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream-200/90 text-charcoal-600 border-2 border-cream-300 flex items-center justify-center shadow-md">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
            </div>
          )}
        </div>

        {/* BADGES POR STATUS */}
        {status === 'approved' && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-4 border border-olive-400/30">
            <span>PAGAMENTO CONFIRMADO</span>
          </div>
        )}

        {status === 'pending' && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-bold tracking-wider uppercase mb-4 border border-gold-400/30">
            <span>PAGAMENTO EM PROCESSAMENTO</span>
          </div>
        )}

        {status === 'failed' && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wine-100 text-wine-800 text-xs font-bold tracking-wider uppercase mb-4 border border-wine-300/40">
            <span>PAGAMENTO NÃO CONCLUÍDO</span>
          </div>
        )}

        {status === 'unknown' && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-charcoal-700 text-xs font-bold tracking-wider uppercase mb-4 border border-cream-300">
            <span>PEDIDO REGISTRADO</span>
          </div>
        )}

        {/* TÍTULOS E SUBHEADLINES DINÂMICAS */}
        {status === 'approved' && (
          <>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 leading-tight mb-3">
              Seu acesso está liberado.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed mb-7">
              Agora é só abrir o material e começar a descobrir novos sabores.
            </p>

            {/* CTA Principal Approved */}
            <div className="flex flex-col items-center gap-3">
              <a
                href={PRODUCT_CONFIG.productAccessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAccessClick}
                id="btn-access-recipes"
                className="inline-flex items-center justify-center gap-2.5 bg-wine-700 hover:bg-wine-800 active:bg-wine-900 text-white font-bold text-base sm:text-lg px-8 py-4 min-h-[48px] rounded-full shadow-lg shadow-wine-900/20 hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
              >
                <span>ACESSAR MINHAS RECEITAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-charcoal-500 font-medium pt-1">
                Guarde esta página ou confira também o e-mail utilizado na compra.
              </p>
            </div>
          </>
        )}

        {status === 'pending' && (
          <>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 leading-tight mb-3">
              Recebemos seu pedido.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed mb-7">
              Seu pagamento ainda está sendo processado. Assim que houver a confirmação, o acesso será liberado conforme as regras da plataforma de pagamento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRefresh}
                id="btn-verify-again"
                disabled={isRefreshing}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-100 text-charcoal-800 border border-cream-300 font-bold text-sm sm:text-base px-6 py-3.5 min-h-[48px] rounded-full shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <RefreshCw className={`w-4 h-4 text-wine-700 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Verificando...' : 'VERIFICAR NOVAMENTE'}</span>
              </button>

              <a
                href={PRODUCT_CONFIG.supportUrl}
                onClick={handleSupportClick}
                className="text-xs sm:text-sm font-semibold text-wine-700 hover:underline px-4 py-2"
              >
                Dúvidas sobre o processamento? Fale com o suporte
              </a>
            </div>
          </>
        )}

        {status === 'failed' && (
          <>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 leading-tight mb-3">
              Não conseguimos confirmar o pagamento.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed mb-7">
              Seu pedido foi registrado, mas o pagamento não foi concluído.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-try-again-checkout"
                className="inline-flex items-center justify-center gap-2.5 bg-wine-700 hover:bg-wine-800 text-white font-bold text-base sm:text-lg px-8 py-4 min-h-[48px] rounded-full shadow-md transition-all active:scale-[0.98]"
              >
                <span>TENTAR NOVAMENTE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs sm:text-sm text-charcoal-500 font-medium">
                Se você acredita que isso é um erro,{' '}
                <a
                  href={PRODUCT_CONFIG.supportUrl}
                  onClick={handleSupportClick}
                  className="text-wine-700 underline font-semibold hover:text-wine-800"
                >
                  entre em contato com o suporte
                </a>.
              </p>
            </div>
          </>
        )}

        {status === 'unknown' && (
          <>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 leading-tight mb-3">
              Pedido recebido.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 font-sans-body max-w-xl mx-auto leading-relaxed mb-7">
              Estamos verificando as informações da sua compra.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-100 text-charcoal-800 border border-cream-300 font-bold text-sm sm:text-base px-6 py-3.5 min-h-[48px] rounded-full shadow-sm hover:shadow transition-all"
              >
                <RefreshCw className={`w-4 h-4 text-wine-700 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Atualizando...' : 'Atualizar página'}</span>
              </button>

              <a
                href={PRODUCT_CONFIG.supportUrl}
                onClick={handleSupportClick}
                className="text-xs sm:text-sm font-semibold text-wine-700 hover:underline px-4 py-2"
              >
                Falar com o suporte
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  );
};
