import React from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ArrowRight, Compass } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const handleFinalCta = () => {
    trackAnalyticsEvent('click_checkout_mid', { section: 'final_cta' });
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-36 bg-charcoal-900 text-white overflow-hidden">
      {/* Fundo Panorâmico com Comidas e Tratamento Fotográfico Editorial */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="Mesa posta com banquete internacional"
          className="w-full h-full object-cover object-center filter brightness-35"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/80 to-charcoal-950/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/80 border border-wine-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <Compass className="w-3.5 h-3.5" />
          <span>Sua Próxima Parada</span>
        </div>

        {/* Headline Emocional */}
        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-sm">
          Qual será o destino da sua próxima refeição?
        </h2>

        {/* Texto */}
        <p className="text-lg sm:text-2xl text-cream-200 font-light max-w-2xl mx-auto mb-10 font-sans-body">
          120 receitas. 10 cozinhas. Um mundo inteiro de possibilidades.
        </p>

        {/* CTA */}
        <div>
          <a
            href={PRODUCT_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFinalCta}
            id="final-cta-button"
            className="inline-flex items-center justify-center gap-3 bg-wine-600 hover:bg-wine-500 active:bg-wine-700 text-white font-bold text-lg sm:text-xl px-9 py-4 sm:py-5 rounded-full shadow-2xl shadow-wine-950/60 transform hover:-translate-y-1 transition-all duration-200 group"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
