import React, { useState } from 'react';
import { PRODUCT_CONFIG } from '../../config/product';

export const ThankYouFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | 'suporte' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-cream-200 py-10 border-t border-charcoal-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-charcoal-800/80 text-center sm:text-left">
          <div>
            <span className="font-editorial text-lg font-bold text-white tracking-tight">
              {PRODUCT_CONFIG.name}
            </span>
            <span className="block text-[11px] text-charcoal-400 mt-0.5">
              Portal do Cliente • Acesso e Suporte
            </span>
          </div>

          <nav className="flex items-center gap-5 text-charcoal-400 font-medium">
            <button
              onClick={() => setActiveModal('termos')}
              className="hover:text-cream-100 transition-colors"
            >
              Termos de Uso
            </button>
            <span className="text-charcoal-700">•</span>
            <button
              onClick={() => setActiveModal('privacidade')}
              className="hover:text-cream-100 transition-colors"
            >
              Política de Privacidade
            </button>
            <span className="text-charcoal-700">•</span>
            <button
              onClick={() => setActiveModal('suporte')}
              className="hover:text-cream-100 transition-colors"
            >
              Suporte
            </button>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-charcoal-500 text-center sm:text-left">
          <p>© {currentYear} {PRODUCT_CONFIG.name}. Todos os direitos reservados.</p>
          <p>Ambiente seguro e criptografado para entrega digital.</p>
        </div>
      </div>

      {/* Modal Institucional */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm">
          <div className="bg-white text-charcoal-800 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-cream-300 relative text-left">
            <h3 className="font-editorial text-xl font-bold text-charcoal-900 mb-4">
              {activeModal === 'termos' && 'Termos de Uso'}
              {activeModal === 'privacidade' && 'Política de Privacidade'}
              {activeModal === 'suporte' && 'Suporte ao Cliente'}
            </h3>

            <div className="text-xs sm:text-sm text-charcoal-600 space-y-3 max-h-72 overflow-y-auto pr-2 font-sans-body leading-relaxed">
              {activeModal === 'termos' && (
                <p>
                  O produto &quot;{PRODUCT_CONFIG.name}&quot; é um livro/coleção digital para uso pessoal. É proibido qualquer tipo de revenda ou compartilhamento público do material.
                </p>
              )}
              {activeModal === 'privacidade' && (
                <p>
                  Seus dados são tratados com total sigilo e utilizados estritamente para viabilizar o envio do acesso ao produto adquirido.
                </p>
              )}
              {activeModal === 'suporte' && (
                <div>
                  <p className="mb-2">E-mail oficial de suporte:</p>
                  <p className="font-mono text-wine-700 font-semibold">{PRODUCT_CONFIG.supportEmail}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-charcoal-900 text-white text-xs font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
