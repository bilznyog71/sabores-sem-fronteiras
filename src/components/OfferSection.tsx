import React from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ShieldCheck, ArrowRight, Check, Sparkles, BookOpen } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const handleOfferCta = () => {
    trackAnalyticsEvent('click_checkout_offer', {
      section: 'offer_box',
      price: PRODUCT_CONFIG.price,
    });
  };

  return (
    <section id="oferta" className="py-20 sm:py-28 lg:py-32 bg-wine-900 text-cream-50 relative overflow-hidden">
      {/* Luz ambiente e textura de fundo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wine-700/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal-900/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUNA ESQUERDA: MOCKUP DO PRODUTO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-wine-950/80 p-5 sm:p-6 rounded-3xl border border-wine-500/30 shadow-2xl backdrop-blur-sm">
              
              {/* Capa Principal com Acabamento Refinado */}
              <div className="bg-cream-100 rounded-2xl p-6 text-charcoal-900 border border-cream-300 relative overflow-hidden flex flex-col justify-between min-h-[440px]">
                
                <div className="border-b border-charcoal-200 pb-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-wine-700 font-mono">
                    Coleção Digital
                  </span>
                  <span className="text-[11px] font-semibold bg-wine-100 text-wine-800 px-2.5 py-0.5 rounded-full">
                    Acesso Imediato
                  </span>
                </div>

                <div className="text-center py-4">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-wine-700 text-gold-300 flex items-center justify-center font-editorial font-bold text-2xl shadow">
                    SF
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
                    {PRODUCT_CONFIG.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-2">
                    {PRODUCT_CONFIG.subtitle}
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden h-36 mb-4 shadow-sm border border-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                    alt="Coleção Sabores sem Fronteiras"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="pt-3 border-t border-charcoal-200 text-center text-xs text-charcoal-500">
                  120 Receitas • 10 Cozinhas • PDF de Alta Resolução
                </div>

              </div>

              {/* Tag lateral */}
              <div className="absolute -bottom-3 -left-3 bg-gold-400 text-charcoal-900 font-bold text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Edição Completa</span>
              </div>

            </div>
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES DA OFERTA E CTA */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-800/80 border border-wine-600/40 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Condição Especial de Acesso</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Leve 120 receitas para a sua cozinha.
            </h2>

            <p className="text-base sm:text-lg text-cream-200/90 mb-6 font-sans-body max-w-xl leading-relaxed">
              Transforme o ato de cozinhar em uma jornada cultural e gastronômica com ingredientes fáceis e passo a passo direto.
            </p>

            {/* Checklist Resumido do Pacote */}
            <div className="space-y-2.5 mb-8 w-full max-w-md">
              <div className="flex items-center gap-3 text-sm sm:text-base text-cream-100 font-medium">
                <span className="w-5 h-5 rounded-full bg-wine-600 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>Produto:</strong> {PRODUCT_CONFIG.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-cream-100 font-medium">
                <span className="w-5 h-5 rounded-full bg-wine-600 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>120 receitas</strong> balanceadas e detalhadas</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-cream-100 font-medium">
                <span className="w-5 h-5 rounded-full bg-wine-600 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>10 cozinhas</strong> do mundo organizadas</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-cream-100 font-medium">
                <span className="w-5 h-5 rounded-full bg-wine-600 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>Acesso digital</strong> imediato e vitalício</span>
              </div>
            </div>

            {/* Bloco de Preço */}
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-wine-950/70 border border-wine-600/30 w-full max-w-md">
              {PRODUCT_CONFIG.hasDiscount && PRODUCT_CONFIG.previousPrice && (
                <div className="text-xs sm:text-sm text-cream-300/80 mb-1">
                  De <span className="line-through text-cream-400">{PRODUCT_CONFIG.previousPrice}</span> por apenas:
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-5xl font-bold font-editorial text-gold-300">
                  {PRODUCT_CONFIG.price}
                </span>
                <span className="text-xs sm:text-sm text-cream-300">
                  (pagamento único)
                </span>
              </div>
              <div className="text-xs text-cream-300/80 mt-1">
                Sem assinaturas ou mensalidades recorrentes
              </div>
            </div>

            {/* CTA Enorme */}
            <div className="w-full max-w-md flex flex-col items-stretch gap-3">
              <a
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOfferCta}
                id="offer-cta-button"
                className="w-full inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 active:bg-gold-500 text-charcoal-900 font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-full shadow-2xl hover:shadow-gold-400/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group text-center"
              >
                <span>QUERO TER ACESSO AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Selo de Segurança */}
              <div className="flex items-center justify-center gap-2 text-xs text-cream-300 pt-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-gold-300" />
                <span>Compra processada em ambiente seguro</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
