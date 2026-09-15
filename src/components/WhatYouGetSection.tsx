import React from 'react';
import { DELIVERABLES, PRODUCT_CONFIG } from '../config/product';
import { Check, BookOpen, Layers, Sparkles } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  return (
    <section id="conteudo" className="py-16 sm:py-24 lg:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* COLUNA ESQUERDA: GRANDE MOCKUP EDITORIAL DO PRODUTO */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Moldura de Livro Editorial com Efeito de Lombada e Camadas */}
              <div className="relative mx-auto bg-charcoal-900 rounded-3xl p-5 shadow-2xl shadow-charcoal-900/30 border border-charcoal-700/80 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Capa do Livro Digital */}
                <div className="relative rounded-2xl overflow-hidden bg-cream-100 border border-cream-300 p-6 flex flex-col justify-between min-h-[460px]">
                  
                  {/* Elementos Decorativos da Capa */}
                  <div className="flex items-center justify-between border-b border-charcoal-200 pb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-wine-700" />
                      <span className="text-xs font-bold uppercase tracking-widest text-charcoal-700">Edição Digital Definitiva</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-wine-100 text-wine-800">120 Receitas</span>
                  </div>

                  {/* Miolo Visual da Capa */}
                  <div className="my-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wine-700 text-gold-300 flex items-center justify-center font-editorial font-bold text-2xl shadow-md border-2 border-gold-400/40">
                      MM
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight mb-2">
                      {PRODUCT_CONFIG.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 font-sans-body max-w-xs mx-auto">
                      Atlas culinário doméstico com 10 grandes tradições gastronômicas do mundo
                    </p>
                  </div>

                  {/* Foto Miniatura Editorial na Capa */}
                  <div className="rounded-xl overflow-hidden h-36 mb-4 shadow-inner border border-cream-200">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                      alt="Pratos artesanais da coleção"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Rodapé da Capa */}
                  <div className="pt-3 border-t border-charcoal-200 flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                    <span>10 PAÍSES</span>
                    <span>•</span>
                    <span>ENTRADAS A SOBREMESAS</span>
                    <span>•</span>
                    <span>PDF HD</span>
                  </div>

                </div>

              </div>

              {/* Tag Flutuante Decorativa */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-cream-200 flex items-center gap-2.5 z-20">
                <Layers className="w-5 h-5 text-wine-700" />
                <div className="text-left text-xs">
                  <div className="font-bold text-charcoal-900">Mais de 260 páginas</div>
                  <div className="text-charcoal-500">Formato digital de alta definição</div>
                </div>
              </div>

            </div>
          </div>

          {/* COLUNA DIREITA: TITULO E CHECKLIST ELEGANTE */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Conteúdo Completo</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
              Um verdadeiro atlas gastronômico.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 mb-8 font-sans-body leading-relaxed">
              Cada página foi desenhada com critério visual e culinário, permitindo que qualquer cozinheiro doméstico execute as receitas com precisão.
            </p>

            {/* Checklist Elegante com ícones discretos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {DELIVERABLES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/80 border border-cream-200 shadow-sm hover:border-wine-300 hover:shadow transition-all duration-200 flex items-start gap-3.5"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-wine-50 text-wine-700 flex items-center justify-center border border-wine-200 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-charcoal-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-500 mt-1 leading-relaxed font-sans-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
