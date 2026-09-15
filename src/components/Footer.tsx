import React, { useState } from 'react';
import { PRODUCT_CONFIG } from '../config/product';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | 'suporte' | null>(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="rodape" className="bg-charcoal-950 text-cream-200 py-12 border-t border-charcoal-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal-800/80">
          
          {/* Logo / Nome */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-editorial text-xl font-bold text-white tracking-tight">
              {PRODUCT_CONFIG.name}
            </span>
            <span className="text-[11px] text-gold-400/90 uppercase tracking-widest mt-0.5">
              120 receitas para viajar pelo mundo
            </span>
          </div>

          {/* Links Institucionais Reais com Modais de Leitura */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-charcoal-400 font-medium">
            <button
              onClick={() => setActiveModal('termos')}
              className="hover:text-cream-100 transition-colors focus:outline-none"
            >
              Termos de Uso
            </button>
            <span className="text-charcoal-700">•</span>
            <button
              onClick={() => setActiveModal('privacidade')}
              className="hover:text-cream-100 transition-colors focus:outline-none"
            >
              Política de Privacidade
            </button>
            <span className="text-charcoal-700">•</span>
            <button
              onClick={() => setActiveModal('suporte')}
              className="hover:text-cream-100 transition-colors focus:outline-none"
            >
              Suporte
            </button>
          </nav>
        </div>

        {/* Rodapé com Copyright Automático e Isenção Clara */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 text-center sm:text-left">
          <p>
            © {currentYear} {PRODUCT_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p>
            Produto digital para consulta doméstica. Acesso imediato após confirmação do pagamento.
          </p>
        </div>
      </div>

      {/* Modal Institucional Limpo e Elegante */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm">
          <div className="bg-white text-charcoal-800 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-cream-300 relative text-left">
            <h3 className="font-editorial text-2xl font-bold text-charcoal-900 mb-4">
              {activeModal === 'termos' && 'Termos de Uso'}
              {activeModal === 'privacidade' && 'Política de Privacidade'}
              {activeModal === 'suporte' && 'Suporte ao Cliente'}
            </h3>

            <div className="text-sm text-charcoal-600 space-y-3 max-h-72 overflow-y-auto pr-2 font-sans-body leading-relaxed">
              {activeModal === 'termos' && (
                <>
                  <p>
                    O produto &quot;{PRODUCT_CONFIG.name}&quot; é um livro/conteúdo digital destinado para uso pessoal e recreativo em culinária doméstica.
                  </p>
                  <p>
                    É expressamente proibida a reprodução não autorizada, compartilhamento em massa, revenda ou distribuição comercial de qualquer parte do material sem o consentimento prévio dos titulares dos direitos autorais.
                  </p>
                </>
              )}

              {activeModal === 'privacidade' && (
                <>
                  <p>
                    Respeitamos integralmente a sua privacidade. Os dados informados no momento da compra são processados em ambiente com criptografia SSL pela plataforma oficial de pagamentos.
                  </p>
                  <p>
                    Não comercializamos, alugamos ou compartilhamos seus dados pessoais com terceiros. As comunicações são restritas à entrega do material digital adquirido e avisos pertinentes.
                  </p>
                </>
              )}

              {activeModal === 'suporte' && (
                <>
                  <p>
                    Dúvidas sobre o recebimento do arquivo digital ou precisa de assistência com o seu acesso?
                  </p>
                  <p className="font-medium text-charcoal-800">
                    E-mail oficial de atendimento: <br />
                    <span className="text-wine-700 font-mono text-sm">{PRODUCT_CONFIG.supportEmail}</span>
                  </p>
                  <p className="text-xs text-charcoal-500">
                    Nosso suporte responde em dias úteis com orientações diretas para acesso e leitura.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold"
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
