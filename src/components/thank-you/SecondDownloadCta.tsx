import React, { useState } from 'react';
import { Download, Loader2, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { SUPPORT_URL, trackAnalyticsEvent } from '../../config/product';
import { executeSecureDownload } from '../../services/downloadService';

interface SecondDownloadCtaProps {
  orderId?: string;
  token?: string;
  transactionId?: string;
}

export const SecondDownloadCta: React.FC<SecondDownloadCtaProps> = ({
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
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    } catch (err) {
      console.warn('[Second CTA Download] Erro no download:', err);
      setDownloadState('error');
      setErrorMessage('Não conseguimos iniciar o download.');
    }
  };

  return (
    <section aria-label="Download do eBook" className="py-10 sm:py-14 text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
          Seu eBook está pronto.
        </h2>

        <p className="text-xs sm:text-sm text-charcoal-600 mb-6 font-sans-body max-w-md mx-auto">
          Inicie o download seguro do seu exemplar e tenha acesso a todas as 120 receitas.
        </p>

        <div className="max-w-md mx-auto">
          {downloadState === 'error' ? (
            <div className="p-4 rounded-2xl bg-wine-50/70 border border-wine-200 text-left transition-all">
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
                      onClick={() => trackAnalyticsEvent('support_click', { location: 'second_cta_error' })}
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
                id="btn-retry-second-download"
                className="w-full min-h-[48px] rounded-full bg-wine-700 hover:bg-wine-800 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>TENTAR NOVAMENTE</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => startDownload(false)}
              disabled={downloadState === 'preparing'}
              id="btn-second-download"
              className={`w-full min-h-[52px] sm:min-h-[56px] px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-wine-900/15 flex items-center justify-center gap-2.5 transition-all ${
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
                  <span>BAIXAR MESA MUNDI</span>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
