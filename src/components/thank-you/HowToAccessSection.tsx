import React from 'react';
import { Download, BookmarkCheck, Utensils } from 'lucide-react';

export const HowToAccessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Baixe o arquivo',
      description: 'Clique no botão de download acima.',
      icon: Download,
    },
    {
      number: '02',
      title: 'Salve o PDF',
      description: 'Guarde no celular, computador ou serviço de nuvem.',
      icon: BookmarkCheck,
    },
    {
      number: '03',
      title: 'Escolha sua primeira receita',
      description: 'Abra o material e descubra qual será o próximo sabor da sua mesa.',
      icon: Utensils,
    },
  ];

  return (
    <section aria-label="Instruções de acesso" className="py-10 sm:py-14 bg-cream-100/60 border-y border-cream-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Título da Seção */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] uppercase font-bold tracking-widest text-wine-700 block mb-1">
            Passo a Passo
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900">
            Como acessar
          </h2>
        </div>

        {/* 3 Passos: 3 colunas no desktop, vertical no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-cream-200/80 shadow-xs flex flex-col justify-between transition-all hover:shadow-sm text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-gold-600/90 font-serif">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-wine-50 text-wine-700 flex items-center justify-center border border-wine-100">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-base sm:text-lg font-bold text-charcoal-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans-body">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
