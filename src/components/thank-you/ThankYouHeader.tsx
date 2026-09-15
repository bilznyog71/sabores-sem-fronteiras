import React from 'react';
import { PRODUCT_CONFIG } from '../../config/product';
import { Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYouHeader: React.FC = () => {
  return (
    <header className="w-full bg-cream-50/95 backdrop-blur-md border-b border-cream-200/80 py-4 sm:py-5 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Textual Elegante */}
        <Link to="/" className="group flex flex-col text-left">
          <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-wine-700 transition-colors">
            Mesa<span className="text-wine-700">Mundi</span>
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-wine-700 font-semibold">
            Confirmação de Pedido
          </span>
        </Link>

        {/* Link Discreto de Suporte */}
        <a
          href={PRODUCT_CONFIG.supportUrl}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-charcoal-600 hover:text-wine-700 transition-colors px-3 py-1.5 rounded-full border border-cream-300/80 hover:border-wine-300 bg-white/70"
        >
          <Headphones className="w-3.5 h-3.5 text-wine-700" />
          <span>Suporte</span>
        </a>
      </div>
    </header>
  );
};
