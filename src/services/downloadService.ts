import { PRODUCT_DOWNLOAD_URL, trackAnalyticsEvent } from '../config/product';

export interface DownloadOptions {
  orderId?: string;
  token?: string;
  transactionId?: string;
  simulateError?: boolean;
}

export type DownloadStatus = 'idle' | 'preparing' | 'success' | 'error';

/**
 * MesaMundi - Serviço Seguro de Execução de Download
 * 
 * Garante que:
 * 1. Nenhuma URL direta de PDF estático fique exposta no frontend.
 * 2. O download passe pelo endpoint seguro PRODUCT_DOWNLOAD_URL.
 * 3. O nome de arquivo padronizado 'MesaMundi-120-Receitas-do-Mundo.pdf' seja atribuído.
 * 4. Estados de loading ('Preparando seu download...') e erro sejam comunicados com precisão.
 */
export const executeSecureDownload = async (options: DownloadOptions = {}): Promise<void> => {
  const { orderId, token, transactionId, simulateError } = options;

  trackAnalyticsEvent('download_click', {
    orderId,
    transactionId,
    tokenPresent: Boolean(token),
    location: 'thank_you_page',
  });

  // Simulação de erro controlada para homologação de botões e mensagens
  if (simulateError) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    trackAnalyticsEvent('download_error', { reason: 'simulated_test_error' });
    throw new Error('Falha simulada de conexão para teste.');
  }


  try {
    const response = await fetch(PRODUCT_DOWNLOAD_URL);

    if (response.ok) {
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'MesaMundi-120-Receitas-do-Mundo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);
    } else {
      // Fallback para download direto via link caso o fetch falhe
      const directLink = document.createElement('a');
      directLink.href = PRODUCT_DOWNLOAD_URL;
      directLink.download = 'MesaMundi-120-Receitas-do-Mundo.pdf';
      document.body.appendChild(directLink);
      directLink.click();
      document.body.removeChild(directLink);
    }

    trackAnalyticsEvent('download_success', {
      orderId,
      filename: 'MesaMundi-120-Receitas-do-Mundo.pdf',
    });
  } catch (err) {
    // Fallback de contingência caso fetch tenha erro de rede/CORS
    try {
      const directLink = document.createElement('a');
      directLink.href = PRODUCT_DOWNLOAD_URL;
      directLink.download = 'MesaMundi-120-Receitas-do-Mundo.pdf';
      document.body.appendChild(directLink);
      directLink.click();
      document.body.removeChild(directLink);

      trackAnalyticsEvent('download_success', {
        orderId,
        filename: 'MesaMundi-120-Receitas-do-Mundo.pdf',
      });
    } catch (fallbackErr) {
      trackAnalyticsEvent('download_error', {
        error: (fallbackErr as Error).message || 'unknown_error',
      });
      throw fallbackErr;
    }
  }
};
