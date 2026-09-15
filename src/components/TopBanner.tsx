import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <aside aria-label="Aviso de Destaque" className="w-full bg-charcoal-900 text-cream-100 py-2 px-3 text-center border-b border-charcoal-800 tracking-wide text-xs sm:text-sm font-medium z-40 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="inline-block" role="img" aria-label="prato e talheres">🍽️</span>
        <span className="font-semibold text-gold-400">120 receitas</span>
        <span className="text-charcoal-500">•</span>
        <span>10 cozinhas</span>
        <span className="text-charcoal-500">•</span>
        <span className="text-cream-200/90">acesso digital imediato</span>
      </div>
    </aside>
  );
};
