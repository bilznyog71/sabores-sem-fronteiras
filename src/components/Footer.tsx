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

        {/* Informações Legais Estruturadas */}
        <div className="py-7 border-b border-charcoal-800/80 text-xs text-charcoal-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <p className="text-[11px] font-semibold text-cream-200 uppercase tracking-wider mb-1">
                Identificação Legal
              </p>
              <p className="text-charcoal-300">CNPJ: {PRODUCT_CONFIG.legal.cnpj}</p>
              <p className="text-charcoal-400 text-[11px] mt-0.5">{PRODUCT_CONFIG.name} • Conteúdo Digital</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-cream-200 uppercase tracking-wider mb-1">
                Endereço
              </p>
              <p className="text-charcoal-300">
                {PRODUCT_CONFIG.legal.street}, {PRODUCT_CONFIG.legal.number}
              </p>
              <p className="text-charcoal-400 text-[11px] mt-0.5">
                {PRODUCT_CONFIG.legal.city} - {PRODUCT_CONFIG.legal.state}
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-[11px] font-semibold text-cream-200 uppercase tracking-wider mb-1">
                Contato & Atendimento
              </p>
              <p className="text-charcoal-300">
                Telefone:{' '}
                <a
                  href={`tel:+55${PRODUCT_CONFIG.legal.phone.replace(/\D/g, '')}`}
                  className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
                >
                  {PRODUCT_CONFIG.legal.phone}
                </a>
              </p>
              <p className="text-charcoal-400 text-[11px] mt-0.5">
                E-mail:{' '}
                <a
                  href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
                  className="text-cream-200 hover:text-white transition-colors"
                >
                  {PRODUCT_CONFIG.supportEmail}
                </a>
              </p>
            </div>
          </div>
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
                  <div className="space-y-2 text-charcoal-800">
                    <p className="font-medium">
                      E-mail oficial de atendimento: <br />
                      <a href={`mailto:${PRODUCT_CONFIG.supportEmail}`} className="text-wine-700 font-mono text-sm underline">
                        {PRODUCT_CONFIG.supportEmail}
                      </a>
                    </p>
                    <p className="font-medium">
                      Telefone / WhatsApp: <br />
                      <a
                        href={`https://wa.me/55${PRODUCT_CONFIG.legal.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-wine-700 font-mono text-sm underline"
                      >
                        {PRODUCT_CONFIG.legal.phone}
                      </a>
                    </p>
                  </div>
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
