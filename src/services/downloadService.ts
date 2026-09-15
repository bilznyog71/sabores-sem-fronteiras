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
    tokenPresent: Boolean(token),
    location: 'thank_you_page',
  });

  // Simulação de erro controlada para homologação de botões e mensagens
  if (simulateError) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    trackAnalyticsEvent('download_error', { reason: 'simulated_test_error' });
    throw new Error('Falha simulada de conexão para teste.');
  }

  // Prepara parâmetros de validação
  const params = new URLSearchParams();
  if (token) params.set('token', token);
  if (orderId) params.set('order_id', orderId);
  if (transactionId) params.set('transaction_id', transactionId);

  // Parâmetro de sandbox seguro quando nenhum token de gateway for fornecido
  if (!token && !orderId && !transactionId) {
    params.set('sandbox', 'true');
  }

  const endpoint = `${PRODUCT_DOWNLOAD_URL}?${params.toString()}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf, application/json',
      },
    });

    let blob: Blob;

    if (response.ok) {
      blob = await response.blob();
    } else {
      // Caso o endpoint do servidor não esteja disponível localmente em dev sem o Vercel CLI,
      // gera um blob PDF seguro em memória para garantir a homologação completa da experiência
      if (response.status === 404 && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        console.info('[Download Service] Fallback de desenvolvimento local ativado.');
        const fallbackPdfText = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 130 >>\nstream\nBT\n/F1 24 Tf\n80 700 Td\n(MesaMundi - 120 Receitas do Mundo) Tj\n0 -35 Td\n/F1 12 Tf\n(Seu eBook digital foi liberado com sucesso.) Tj\n0 -20 Td\n(10 Cozinhas | 120 Sabores) Tj\nET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000060 00000 n \n0000000117 00000 n \n0000000238 00000 n \n0000000419 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n498\n%%EOF`;
        blob = new Blob([fallbackPdfText], { type: 'application/pdf' });
      } else {
        throw new Error(`Servidor retornou código ${response.status}`);
      }
    }

    // Inicia o download no navegador de forma limpa
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'MesaMundi-120-Receitas-do-Mundo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    trackAnalyticsEvent('download_success', {
      orderId,
      filename: 'MesaMundi-120-Receitas-do-Mundo.pdf',
    });
  } catch (err) {
    trackAnalyticsEvent('download_error', {
      error: (err as Error).message || 'unknown_error',
    });
    throw err;
  }
};
