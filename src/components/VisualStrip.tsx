import React from 'react';
import { HERO_GALLERY_IMAGES } from '../config/product';

export const VisualStrip: React.FC = () => {
  return (
    <section aria-label="Galeria Visual Gastronômica" className="relative w-full py-4 sm:py-6 bg-cream-100/70 border-y border-cream-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-wine-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-wine-700"></span>
            Amostra visual da coleção
          </span>
          <span className="text-xs text-charcoal-500 hidden sm:inline-block">
            Fotos editoriais com iluminação natural
          </span>
        </div>

        {/* Gallery Strip: 5 images in desktop grid, horizontal swipe scroll in mobile */}
        <div className="flex sm:grid sm:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0 snap-x snap-mandatory">
          {HERO_GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-auto relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-center bg-cream-200/50 aspect-[4/3] sm:aspect-[3/4]"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-gold-400 text-charcoal-900 mb-1">
                  {img.category}
                </span>
                <p className="text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-sm font-editorial">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
