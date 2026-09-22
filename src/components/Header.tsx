import React, { useState, useEffect } from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    trackAnalyticsEvent('click_checkout_hero', { location: 'header' });
  };

  return (
    <header
      className={`w-full transition-all duration-300 z-30 ${
        isScrolled
          ? 'sticky top-0 bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-3'
          : 'relative bg-cream-50 py-4 sm:py-5 border-b border-cream-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Textual */}
        <a href="#inicio" className="group flex flex-col">
          <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-wine-700 transition-colors">
            Mesa<span className="text-wine-700">Mundi</span>
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-wine-700 font-semibold">
            Sabores do Mundo
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-charcoal-700">
          <a
            href="#conteudo"
            className="hover:text-wine-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-wine-700 hover:after:w-full after:transition-all"
          >
            O que você recebe
          </a>
          <a
            href="#cozinhas"
            className="hover:text-wine-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-wine-700 hover:after:w-full after:transition-all"
          >
            As cozinhas
          </a>
          <a
            href="#preview"
            className="hover:text-wine-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-wine-700 hover:after:w-full after:transition-all"
          >
            Por dentro
          </a>
          <a
            href="#faq"
            className="hover:text-wine-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-wine-700 hover:after:w-full after:transition-all"
          >
            Dúvidas
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href={PRODUCT_CONFIG.checkoutUrl}
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center bg-wine-700 hover:bg-wine-800 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group active:scale-[0.98]"
            id="header-cta-button"
          >
            <span>QUERO AS RECEITAS</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
