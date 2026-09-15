import React from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ArrowRight, Check, Compass, BookOpen, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleHeroCta = () => {
    trackAnalyticsEvent('click_checkout_hero', { section: 'hero' });
  };

  return (
    <section id="inicio" className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100/60 to-cream-50">
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-wine-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA - TEXTOS E CONVERSÃO */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge Pequeno */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200/80 text-wine-800 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-wine-700" />
              <span>{PRODUCT_CONFIG.badge}</span>
            </div>

            {/* Headline Principal Impactante */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-charcoal-900 leading-[1.14] tracking-tight mb-6">
              <span className="relative inline-block text-wine-700 underline decoration-gold-400/60 decoration-wavy decoration-2 underline-offset-4">
                120 receitas
              </span>{' '}
              para viajar pelo mundo sem sair da sua cozinha.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl mb-8 font-sans-body">
              {PRODUCT_CONFIG.subheadline}
            </p>

            {/* Benefícios em Lista Refinada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-9 w-full max-w-xl">
              {PRODUCT_CONFIG.benefitsSummary.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-charcoal-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center border border-olive-500/30">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Principal Grande */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <a
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHeroCta}
                id="hero-main-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-wine-700 hover:bg-wine-800 active:bg-wine-900 text-white font-bold text-base sm:text-lg px-8 py-4 sm:py-4.5 rounded-full shadow-lg shadow-wine-900/20 hover:shadow-xl hover:shadow-wine-900/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>QUERO DESCOBRIR AS 120 RECEITAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Disclaimer do Hero */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-500 pl-1 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>{PRODUCT_CONFIG.offerDisclaimer}</span>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA - COMPOSIÇÃO EDITORIAL PREMIUM DO PRODUTO */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Moldura do Tablet / Livro Digital Central */}
              <div className="relative mx-auto bg-charcoal-900 p-3 sm:p-4 rounded-[2rem] shadow-2xl shadow-charcoal-900/30 border-4 border-charcoal-800 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 ease-out z-10">
                
                {/* Tela do Tablet */}
                <div className="relative bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 shadow-inner">
                  {/* Barra superior de aplicativo/leitor de livro */}
                  <div className="bg-charcoal-800 px-4 py-2 flex items-center justify-between text-cream-200 text-xs">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                      <span className="font-serif tracking-wide">Sabores sem Fronteiras</span>
                    </div>
                    <span className="text-charcoal-400 text-[10px] uppercase tracking-widest font-mono">Edição Digital</span>
                  </div>

                  {/* Conteúdo da Página do eBook no Tablet */}
                  <div className="relative p-4 sm:p-5">
                    {/* Imagem do Prato em Destaque no Leitor */}
                    <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
                        alt="Tagliatelle al Ragù Tradizionale"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute top-3 left-3 bg-charcoal-900/80 backdrop-blur-sm text-gold-300 text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Receita #34 • Itália
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-charcoal-800 text-[11px] px-2 py-0.5 rounded font-medium shadow">
                        4 porções • 1h40
                      </div>
                    </div>

                    {/* Texto Editorial da Página */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-wine-700">Cozinha Clássica</span>
                        <span className="text-[10px] text-charcoal-400">Pág. 78</span>
                      </div>
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-charcoal-900 leading-snug">
                        Tagliatelle al Ragù di Bologna
                      </h3>
                      <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                        A clássica receita em fogo brando com carne selecionada, pancetta, vinho seco e tomates maduros apurados lentamente.
                      </p>

                      {/* Mini checklist de ingredientes ilustrativos */}
                      <div className="pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal-500 font-medium">
                        <span>✓ Ingredientes exatos</span>
                        <span>✓ Modo passo a passo</span>
                        <span>✓ Dicas do prato</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* TAGS FLUTUANTES COM BANDEIRAS E SUTILEZA */}
              <div className="absolute -top-3 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cream-200/80 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 z-20 transform -rotate-3 animate-pulse">
                <span>🇮🇹</span>
                <span>Itália</span>
              </div>

              <div className="absolute top-1/4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cream-200/80 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 z-20 transform rotate-2">
                <span>🇫🇷</span>
                <span>França</span>
              </div>

              <div className="absolute bottom-28 -left-5 sm:-left-8 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cream-200/80 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 z-20 transform rotate-3">
                <span>🇧🇷</span>
                <span>Brasil</span>
              </div>

              <div className="absolute -bottom-4 right-12 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cream-200/80 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 z-20 transform -rotate-2">
                <span>🇨🇳</span>
                <span>China</span>
              </div>

              <div className="hidden sm:flex absolute bottom-8 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cream-200/80 text-xs font-semibold text-charcoal-800 items-center gap-1.5 z-20 transform rotate-6">
                <span>🇵🇹</span>
                <span>Portugal</span>
              </div>

              {/* Cartãozinho Decorativo de Coleção Gastronômica */}
              <div className="hidden md:flex absolute -bottom-8 -left-4 bg-cream-100/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-cream-300 text-left items-center gap-3 z-20 max-w-[210px]">
                <div className="w-10 h-10 rounded-lg bg-wine-700 text-gold-300 flex items-center justify-center font-editorial font-bold text-lg flex-shrink-0">
                  120
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold text-charcoal-900">Receitas Testadas</div>
                  <div className="text-charcoal-500">Para reproduzir na sua cozinha comum</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
