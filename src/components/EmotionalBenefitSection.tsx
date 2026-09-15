import React from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

export const EmotionalBenefitSection: React.FC = () => {
  const handleCta = () => {
    trackAnalyticsEvent('click_checkout_mid', { section: 'emotional_benefit' });
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-charcoal-900 text-cream-50 overflow-hidden">
      {/* Imagem Panorâmica de Fundo com Comida Farta sobre a Mesa */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
          alt="Mesa farta com pratos e preparos gastronômicos"
          className="w-full h-full object-cover object-center filter brightness-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/85 to-charcoal-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/70 border border-wine-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>A Cozinha como Janela para o Mundo</span>
          </div>

          {/* Headline Emocional */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Você não precisa viajar milhares de quilômetros para descobrir novos sabores.
          </h2>

          {/* Textos */}
          <p className="text-lg sm:text-xl text-cream-200 leading-relaxed font-light mb-4 font-sans-body">
            Uma boa receita consegue carregar história, tradição e cultura para dentro da sua cozinha.
          </p>

          <p className="font-editorial italic text-xl sm:text-2xl text-gold-300 font-medium mb-10">
            &ldquo;Escolha um país. Separe os ingredientes. E faça da próxima refeição o destino.&rdquo;
          </p>

          {/* CTA Intermediário */}
          <div>
            <a
              href={PRODUCT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCta}
              id="emotional-cta-button"
              className="inline-flex items-center justify-center gap-3 bg-wine-600 hover:bg-wine-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl shadow-wine-950/40 hover:shadow-2xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span>COMEÇAR MINHA VIAGEM GASTRONÔMICA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
