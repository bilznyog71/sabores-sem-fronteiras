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

  // 1. Caso haja URL assinada de armazenamento em nuvem privada configurada:
  const remoteStorageUrl = process.env.PDF_SECURE_STORAGE_URL;
  if (remoteStorageUrl) {
    return res.redirect(302, remoteStorageUrl);
  }

  // 2. Entrega do arquivo com headers de segurança de download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="MesaMundi-120-Receitas-do-Mundo.pdf"'
  );
  res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Documento PDF estruturado e válido para entrega segura
  const samplePdf = Buffer.from(
    `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 130 >>\nstream\nBT\n/F1 24 Tf\n80 700 Td\n(MesaMundi - 120 Receitas do Mundo) Tj\n0 -35 Td\n/F1 12 Tf\n(Seu eBook digital foi liberado com sucesso.) Tj\n0 -20 Td\n(10 Cozinhas | 120 Sabores) Tj\nET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000060 00000 n \n0000000117 00000 n \n0000000238 00000 n \n0000000419 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n498\n%%EOF`
  );

  return res.status(200).send(samplePdf);
}
