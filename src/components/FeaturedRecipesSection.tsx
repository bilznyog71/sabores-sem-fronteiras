import React, { useState } from 'react';
import { HIGHLIGHT_RECIPES } from '../config/product';
import { Clock, Users, ChevronDown, ChevronUp, Utensils } from 'lucide-react';

export const FeaturedRecipesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Inicialmente 4 receitas, expande para 8
  const displayedRecipes = showAll ? HIGHLIGHT_RECIPES : HIGHLIGHT_RECIPES.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream-100/50 border-t border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100 border border-terracotta-500/20 text-terracotta-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>Amostras do Conteúdo</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Clássicos que atravessaram fronteiras.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-500 mt-3 md:mt-0 max-w-md text-left md:text-right font-sans-body">
            Conheça alguns dos pratos emblemáticos presentes no material, preparados com ingredientes fáceis de encontrar.
          </p>
        </div>

        {/* Grid dos Cards de Receitas (Predominantemente IMAGEM e visual editorial) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-charcoal-900 flex flex-col justify-end min-h-[380px] sm:min-h-[420px]"
            >
              {/* Imagem Editorial Grande */}
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Vinheta Escura para Contraste e Legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Tag Superior de País e Categoria */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/70 backdrop-blur-md border border-white/20 text-xs font-medium text-cream-100">
                  <span>{recipe.flag}</span>
                  <span>{recipe.cuisine}</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-300 bg-charcoal-900/60 px-2.5 py-0.5 rounded-full border border-gold-400/20 backdrop-blur-sm">
                  {recipe.category}
                </span>
              </div>

              {/* Conteúdo Sobreposto na Base do Card */}
              <div className="relative z-10 p-5 sm:p-6 text-left">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-sm group-hover:text-gold-200 transition-colors">
                  {recipe.name}
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/90 line-clamp-2 mb-4 leading-relaxed font-sans-body">
                  {recipe.description}
                </p>

                {/* Métricas: Tempo e Rendimento */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-cream-200/80 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    {recipe.servings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para Expandir/Recolher Sabores */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-50 hover:bg-white text-charcoal-800 border border-cream-300 font-semibold text-sm shadow-sm hover:shadow transition-all duration-200"
            id="toggle-more-recipes-btn"
          >
            <span>{showAll ? 'Ver menos receitas' : 'Ver mais sabores da coleção'}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-wine-700" />
            ) : (
              <ChevronDown className="w-4 h-4 text-wine-700" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
