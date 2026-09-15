import React, { useState } from 'react';
import { Download, Check, Loader2, AlertCircle, RefreshCw, FileText } from 'lucide-react';
import { SUPPORT_URL, trackAnalyticsEvent } from '../../config/product';
import { executeSecureDownload } from '../../services/downloadService';

interface ThankYouHeroProps {
  orderId?: string;
  token?: string;
  transactionId?: string;
}

export const ThankYouHero: React.FC<ThankYouHeroProps> = ({
  orderId,
  token,
  transactionId,
}) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startDownload = async (simulateError: boolean = false) => {
    setDownloadState('preparing');
    setErrorMessage(null);

    try {
      await executeSecureDownload({
        orderId,
        token,
        transactionId,
        simulateError,
      });
      setDownloadState('success');
      // Volta para idle após 3s para permitir novo clique se desejar
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    } catch (err) {
      console.warn('[Hero Download] Erro no download:', err);
      setDownloadState('error');
      setErrorMessage('Não conseguimos iniciar o download.');
    }
  };

  return (
    <section className="pt-5 pb-8 sm:pt-10 sm:pb-14 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Ícone de Check com Animação Discreta (opacity 0 -> 1, scale .95 -> 1) */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-olive-100/90 text-olive-700 border border-olive-500/30 flex items-center justify-center shadow-xs transition-all duration-700 ease-out transform scale-100 hover:scale-105">
            <Check className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.6]" />
          </div>
        </div>

        {/* Badge "COMPRA CONCLUÍDA" */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-50 text-olive-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5 sm:mb-3 border border-olive-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-olive-600"></span>
          <span>COMPRA CONCLUÍDA</span>
        </div>

        {/* Título Principal */}
        <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight mb-1.5 sm:mb-2">
          Deu tudo certo.
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-wine-800 mb-2 sm:mb-3">
          Seu acesso ao MesaMundi está liberado.
        </p>

        {/* Texto Explicativo */}
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-lg mx-auto leading-relaxed mb-5 sm:mb-6 font-sans-body">
          Agora você já pode acessar as 120 receitas e começar a explorar sabores de diferentes partes do mundo.
        </p>

        {/* Bloco de Download Principal (Prioridade Máxima Mobile - Altura >= 52px) */}
        <div className="max-w-md mx-auto">
          {downloadState === 'error' ? (
            /* Estado de Erro Amigável */
            <div className="p-4 sm:p-5 rounded-2xl bg-wine-50/70 border border-wine-200 text-left transition-all animate-fadeIn">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-wine-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-wine-900">
                    {errorMessage || 'Não conseguimos iniciar o download.'}
                  </p>
                  <p className="text-[11px] sm:text-xs text-charcoal-600 mt-0.5">
                    Se o problema continuar,{' '}
                    <a
                      href={SUPPORT_URL}
                      onClick={() => trackAnalyticsEvent('support_click', { location: 'hero_error_alert' })}
                      className="text-wine-700 font-semibold underline hover:text-wine-900"
                    >
                      fale com nosso suporte.
                    </a>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => startDownload(false)}
                id="btn-retry-download"
                className="w-full min-h-[48px] sm:min-h-[52px] rounded-full bg-wine-700 hover:bg-wine-800 active:bg-wine-900 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>TENTAR NOVAMENTE</span>
              </button>
            </div>
          ) : (
            /* Botão Principal de Download */
            <div>
              <button
                type="button"
                onClick={() => startDownload(false)}
                disabled={downloadState === 'preparing'}
                id="btn-main-download"
                className={`w-full min-h-[52px] sm:min-h-[56px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-wine-900/15 flex items-center justify-center gap-2.5 transition-all ${
                  downloadState === 'preparing'
                    ? 'bg-wine-800 text-white/90 cursor-wait'
                    : downloadState === 'success'
                    ? 'bg-olive-700 text-white shadow-olive-900/20 active:scale-[0.98]'
                    : 'bg-wine-700 hover:bg-wine-800 active:bg-wine-900 text-white hover:shadow-xl active:scale-[0.98]'
                }`}
              >
                {downloadState === 'preparing' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white/90" />
                    <span>Preparando seu download...</span>
                  </>
                ) : downloadState === 'success' ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Download iniciado!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 text-gold-300 stroke-[2.2]" />
                    <span>BAIXAR MEU EBOOK</span>
                  </>
                )}
              </button>

              {/* Informações Auxiliares Abaixo do Botão */}
              <div className="mt-2.5 text-center">
                <div className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 font-medium">
                  <FileText className="w-3.5 h-3.5 text-wine-700" />
                  <span>Arquivo digital em PDF</span>
                </div>
                <p className="text-[11px] sm:text-xs text-charcoal-500 mt-1 max-w-sm mx-auto leading-relaxed">
                  Recomendamos salvar o arquivo no seu celular, computador ou nuvem para acessar sempre que quiser.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
