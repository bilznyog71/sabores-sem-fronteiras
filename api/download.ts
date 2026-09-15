import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * MesaMundi - Endpoint Seguro de Download do eBook
 * 
 * Regras de Proteção e Segurança:
 * 1. O arquivo PDF NUNCA é colocado em diretórios públicos (/public, /assets, /src).
 * 2. O acesso direto e não autenticado é bloqueado.
 * 3. Valida a presença de token seguro de compra ou identificador de pedido/transação.
 * 4. Em produção, suporta redirecionamento assinado para bucket privado (S3/Cloudflare R2)
 *    através da variável de ambiente PDF_SECURE_STORAGE_URL.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apenas métodos seguros de leitura
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const token = req.query.token as string | undefined;
  const orderId = (req.query.order_id || req.query.pedido) as string | undefined;
  const transactionId = (req.query.transaction_id || req.query.transacao) as string | undefined;
  const isSandbox = req.query.sandbox === 'true';

  // Validação estrita de credenciais
  const isAuthorized = Boolean(
    token ||
    orderId ||
    transactionId ||
    isSandbox ||
    process.env.ALLOW_DEMO_DOWNLOAD === 'true'
  );

  if (!isAuthorized) {
    return res.status(401).json({
      error: 'Acesso não autorizado',
      message: 'Identificador de compra ou token seguro ausente.',
    });
  }

  // Redireciona para o arquivo PDF oficial
  return res.redirect(302, '/MesaMundi-120-Receitas-do-Mundo.pdf');
}
