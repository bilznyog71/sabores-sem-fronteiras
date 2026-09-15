import React from 'react';
import { BookOpen } from 'lucide-react';

export const ThankYouProductCard: React.FC = () => {
  return (
    <section aria-label="Produto Adquirido" className="max-w-2xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-cream-200/90 shadow-sm p-5 sm:p-7 transition-all hover:shadow-md">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
          
          {/* Mockup Compacto da Capa MesaMundi */}
          <div className="w-28 sm:w-32 flex-shrink-0">
            <div className="relative aspect-[3/4] bg-charcoal-900 rounded-xl p-2.5 shadow-md border-2 border-charcoal-800 flex flex-col justify-between text-cream-100 overflow-hidden">
              
              {/* Header da Capa */}
              <div className="flex items-center justify-between text-[9px] text-gold-400 font-serif">
                <span>Edição Digital</span>
                <span>PDF</span>
              </div>

              {/* Centro da Capa */}
              <div className="text-center my-auto">
                <div className="w-8 h-8 mx-auto rounded-full bg-wine-700 text-gold-300 flex items-center justify-center font-editorial font-bold text-xs shadow-xs border border-gold-400/30 mb-1">
                  MM
                </div>
                <div className="font-editorial text-xs font-bold leading-tight text-white">
                  MesaMundi
                </div>
                <div className="text-[8px] text-cream-300 font-sans mt-0.5">
                  120 Receitas
                </div>
              </div>

              {/* Rodapé da Capa */}
              <div className="pt-1 border-t border-charcoal-800 text-[8px] text-charcoal-400 font-mono text-center">
                10 Cozinhas
              </div>
            </div>
          </div>

          {/* Dados do Produto Conforme Especificação */}
          <div className="flex-1 space-y-3">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-wine-700 uppercase tracking-wider mb-1">
                <BookOpen className="w-3.5 h-3.5 text-wine-700" />
                <span>eBook Oficial</span>
              </div>
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal-900 leading-tight">
                MesaMundi
              </h2>
              <p className="text-sm font-semibold text-charcoal-800 mt-0.5">
                120 Receitas do Mundo
              </p>
              <p className="text-xs text-wine-800 font-medium mt-1">
                10 cozinhas • 120 sabores
              </p>
            </div>

            <div className="pt-3 border-t border-cream-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-left">
              <div>
                <span className="text-charcoal-500 block text-[11px]">Formato:</span>
                <span className="font-medium text-charcoal-800">PDF Digital</span>
              </div>
              <div>
                <span className="text-charcoal-500 block text-[11px]">Acesso:</span>
                <span className="font-medium text-charcoal-800">Imediato após confirmação da compra</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
