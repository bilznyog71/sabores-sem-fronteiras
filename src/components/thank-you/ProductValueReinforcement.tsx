import React from 'react';
import { PRODUCT_CONFIG } from '../../config/product';
import { Check, Sparkles } from 'lucide-react';

export const ProductValueReinforcement: React.FC = () => {
  const items = [
    "120 receitas",
    "10 tradições culinárias",
    "pratos doces e salgados",
    "ingredientes detalhados",
    "modo de preparo",
    "acesso digital",
  ];

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Mockup Compacto do Produto (sem ocupar espaço exagerado no mobile) */}
          <div className="w-full md:w-5/12 flex-shrink-0 flex justify-center">
            <div className="relative w-48 sm:w-56 bg-charcoal-900 rounded-2xl p-3 shadow-xl border border-charcoal-700 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-cream-100 rounded-xl p-4 text-center border border-cream-200">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-wine-700 text-gold-300 flex items-center justify-center font-editorial font-bold text-sm shadow">
                  SF
                </div>
                <div className="font-editorial text-sm font-bold text-charcoal-900 leading-tight">
                  {PRODUCT_CONFIG.name}
                </div>
                <div className="text-[10px] text-wine-700 font-semibold uppercase tracking-wider mt-0.5">
                  Edição Completa
                </div>

                <div className="rounded-lg overflow-hidden h-24 my-2.5 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                    alt={PRODUCT_CONFIG.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="text-[10px] text-charcoal-500 font-mono">
                  120 RECEITAS • 10 COZINHAS
                </div>
              </div>
            </div>
          </div>

          {/* Textos de Reforço de Satisfação */}
          <div className="w-full md:w-7/12 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wine-50 text-wine-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-wine-200/60">
              <Sparkles className="w-3 h-3 text-gold-500" />
              <span>Sua Coleção Gastronômica</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight mb-3">
              Um mundo de sabores está esperando por você.
            </h2>

            <p className="text-xs sm:text-sm text-charcoal-600 font-sans-body mb-6 leading-relaxed">
              Você agora tem em mãos um passaporte completo para transformar ingredientes comuns em banquetes memoráveis inspirados nas grandes tradições da culinária mundial.
            </p>

            {/* Checklist de Itens Adquiridos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-charcoal-700 font-medium">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
