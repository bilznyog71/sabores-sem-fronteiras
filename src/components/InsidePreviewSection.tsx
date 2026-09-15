import React, { useState } from 'react';
import { PREVIEW_PAGES } from '../config/product';
import { Eye, BookOpen, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export const InsidePreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const prevSlide = () => {
    setActiveTab((prev) => (prev === 0 ? PREVIEW_PAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveTab((prev) => (prev === PREVIEW_PAGES.length - 1 ? 0 : prev + 1));
  };

  const currentPage = PREVIEW_PAGES[activeTab];

  return (
    <section id="preview" className="py-16 sm:py-24 lg:py-28 bg-cream-100/60 border-y border-cream-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wine-100/80 border border-wine-200 text-wine-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Demonstração de Diagramação</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
            Veja como é por dentro.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans-body leading-relaxed">
            Diagramação editorial limpa, fontes legíveis e estrutura pensada para você apoiar o celular ou tablet na bancada e cozinhar sem esforço.
          </p>
        </div>

        {/* Abas / Seletores no Desktop e Mobile */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto no-scrollbar gap-2 sm:gap-3 px-2">
          {PREVIEW_PAGES.map((p, idx) => (
            <button
              key={p.pageNumber}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-wine-700 text-white shadow-md shadow-wine-900/20'
                  : 'bg-white/80 hover:bg-white text-charcoal-700 border border-cream-200/90'
              }`}
            >
              <span className="opacity-75 font-mono text-[11px]">Pág. {p.pageNumber}</span>
              <span>{p.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* CONTAINER DO LIVRO ABERTO / PRÉVIA EDITORIAL */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Folha Aberta Estilo Revista / Livro de Culinária de Luxo */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-charcoal-900/15 border border-cream-300 p-6 sm:p-10 lg:p-12 relative">
            
            {/* Vinco Central da Lombada do Livro */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-cream-300 via-charcoal-200 to-cream-300 -translate-x-1/2 z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* LADO ESQUERDO DO LIVRO: FOTO / CONCEITO EDITORIAL */}
              <div className="relative rounded-2xl overflow-hidden bg-cream-100 border border-cream-200 aspect-[4/3] md:aspect-[3/4] flex flex-col justify-end p-5 shadow-inner">
                <img
                  src={
                    activeTab === 0
                      ? "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
                      : activeTab === 1
                      ? "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                      : activeTab === 2
                      ? "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
                      : "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={currentPage.contentHeading}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                
                <div className="relative z-10 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
                    {currentPage.country} • {currentPage.cuisine}
                  </span>
                  <div className="text-white font-editorial text-lg sm:text-xl font-bold mt-0.5">
                    {currentPage.contentHeading}
                  </div>
                </div>
              </div>

              {/* LADO DIREITO DO LIVRO: DIAGRAMAÇÃO DE TEXTO, INGREDIENTES E PREPARO */}
              <div className="text-left flex flex-col justify-between h-full">
                
                {/* Cabeçalho da Página */}
                <div className="border-b border-cream-200 pb-4 mb-4">
                  <div className="flex items-center justify-between text-xs text-charcoal-400 font-mono mb-2">
                    <span className="uppercase tracking-widest text-wine-700 font-semibold">{currentPage.tag}</span>
                    <span>PÁGINA {currentPage.pageNumber}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
                    {currentPage.contentHeading}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-gold-600 mt-1">
                    {currentPage.highlightText}
                  </div>
                </div>

                {/* Conteúdo Simulado da Página */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs uppercase tracking-wider font-bold text-charcoal-400">
                    Destaques desta seção:
                  </p>
                  {currentPage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Aviso Editorial e Rodapé do Leitor */}
                <div className="pt-4 border-t border-cream-200 bg-cream-50/60 p-3.5 rounded-xl border border-dashed text-xs text-charcoal-500 flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-wine-700 flex-shrink-0" />
                  <span>
                    Amostra ilustrativa da diagramação. O arquivo digital integral é entregue de forma segura após o checkout.
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Botões de Navegação Entre Páginas */}
          <button
            onClick={prevSlide}
            aria-label="Página anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg border border-cream-300 text-charcoal-700 hover:text-wine-700 hover:scale-105 flex items-center justify-center transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próxima página"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg border border-cream-300 text-charcoal-700 hover:text-wine-700 hover:scale-105 flex items-center justify-center transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
