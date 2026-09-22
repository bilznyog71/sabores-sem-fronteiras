import React, { useState, useEffect } from 'react';
import { PRODUCT_CONFIG, trackAnalyticsEvent } from '../config/product';
import { ArrowRight, BookOpen } from 'lucide-react';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após passar o primeiro CTA (aprox 500px)
      const scrolledPastHero = window.scrollY > 480;

      // Oculta ao chegar perto do rodapé
      const footerElement = document.getElementById('rodape');
      let isNearFooter = false;

      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight) {
          isNearFooter = true;
        }
      }

      setIsVisible(scrolledPastHero && !isNearFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackAnalyticsEvent('click_checkout_sticky', {
      section: 'sticky_mobile',
      price: PRODUCT_CONFIG.price,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-cream-200/90 shadow-2xl md:hidden transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2 text-left pl-1">
          <BookOpen className="w-4 h-4 text-wine-700 flex-shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-charcoal-900 leading-tight">{PRODUCT_CONFIG.name}</div>
            <div className="text-wine-700 font-semibold">{PRODUCT_CONFIG.price} • 120 receitas</div>
          </div>
        </div>

        <a
          href={PRODUCT_CONFIG.checkoutUrl}
          onClick={handleClick}
          id="mobile-sticky-cta-btn"
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-wine-700 hover:bg-wine-800 text-white font-bold text-xs sm:text-sm px-4 py-3 min-h-[48px] rounded-full shadow-md active:scale-95 transition-all"
        >
          <span>QUERO AS 120 RECEITAS</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
