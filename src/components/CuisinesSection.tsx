import React from 'react';
import { CUISINES } from '../config/product';
import { Globe, ArrowUpRight } from 'lucide-react';

export const CuisinesSection: React.FC = () => {
  return (
    <section id="cozinhas" className="py-16 sm:py-20 lg:py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-charcoal-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Globe className="w-3.5 h-3.5 text-wine-700" />
            <span>Atlas das Cozinhas do Mundo</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
            Uma viagem gastronômica em 120 paradas.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans-body">
            Do conforto de receitas brasileiras aos sabores marcantes da Ásia, passando pelos clássicos europeus e pela riqueza do Mediterrâneo.
          </p>
        </div>

        {/* Grid com as 10 Cozinhas (5 + 5 em telas maiores, scroll horizontal no mobile) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 sm:pb-0 snap-x snap-mandatory">
          {CUISINES.map((cuisine) => (
            <div
              key={cuisine.id}
              className="flex-shrink-0 w-72 sm:w-auto group relative bg-cream-100/60 rounded-2xl overflow-hidden border border-cream-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-center flex flex-col"
            >
              {/* Imagem de Fundo do Prato Típico com Efeito Editorial */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-charcoal-100">
                <img
                  src={cuisine.imageUrl}
                  alt={cuisine.name}
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
                
                {/* Bandeira e País sobre a foto */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-50/90 backdrop-blur-md shadow-sm text-xs font-bold text-charcoal-900">
                  <span className="text-sm">{cuisine.flag}</span>
                  <span>{cuisine.country}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-editorial text-lg font-bold text-white leading-tight">
                    {cuisine.name}
                  </h3>
                  <span className="text-[11px] text-gold-300 font-medium tracking-wide">
                    {cuisine.dishHighlight}
                  </span>
                </div>
              </div>

              {/* Descrição e Estilo Gastronômico */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white/70">
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body mb-3">
                  {cuisine.description}
                </p>

                <div className="pt-2 border-t border-cream-200/80 flex items-center justify-between text-[11px] font-semibold text-wine-700 group-hover:text-wine-800 transition-colors">
                  <span>Receitas exclusivas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dica de usabilidade mobile */}
        <div className="mt-4 text-center sm:hidden text-xs text-charcoal-400">
          ← Deslize horizontalmente para ver todas as 10 cozinhas →
        </div>

      </div>
    </section>
  );
};
