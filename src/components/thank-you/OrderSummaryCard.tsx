import React from 'react';
import type { Order } from '../../config/product';
import { maskEmail } from '../../config/product';
import { Receipt, CheckCircle2, Clock, XCircle, HelpCircle } from 'lucide-react';

interface OrderSummaryCardProps {
  order: Order;
}

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ order }) => {
  // Tradução amigável do status para exibição
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 text-olive-800 font-semibold text-xs bg-olive-100 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> Aprovado
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 text-gold-700 font-semibold text-xs bg-gold-100 px-2.5 py-0.5 rounded-full">
            <Clock className="w-3 h-3" /> Em processamento
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center gap-1 text-wine-800 font-semibold text-xs bg-wine-100 px-2.5 py-0.5 rounded-full">
            <XCircle className="w-3 h-3" /> Não concluído
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-charcoal-700 font-semibold text-xs bg-cream-200 px-2.5 py-0.5 rounded-full">
            <HelpCircle className="w-3 h-3" /> Em análise
          </span>
        );
    }
  };

  const maskedEmail = order.customerEmail ? maskEmail(order.customerEmail) : null;

  return (
    <section aria-label="Resumo da Compra" className="max-w-xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-cream-200/90 shadow-sm p-6 sm:p-7 text-left">
        
        {/* Cabeçalho do Card */}
        <div className="flex items-center justify-between border-b border-cream-200/70 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-wine-700" />
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-charcoal-900">
              Resumo da sua compra
            </h2>
          </div>
          <div>{getStatusBadge(order.status)}</div>
        </div>

        {/* Linhas de Dados (exibidas SOMENTE se existirem) */}
        <dl className="space-y-3 text-xs sm:text-sm">
          {order.productName && (
            <div className="flex justify-between items-center py-1">
              <dt className="text-charcoal-500 font-medium">Produto</dt>
              <dd className="text-charcoal-900 font-semibold">{order.productName}</dd>
            </div>
          )}

          {order.format && (
            <div className="flex justify-between items-center py-1 border-t border-cream-100">
              <dt className="text-charcoal-500 font-medium">Formato</dt>
              <dd className="text-charcoal-800">{order.format}</dd>
            </div>
          )}

          {order.quantity !== undefined && order.quantity > 0 && (
            <div className="flex justify-between items-center py-1 border-t border-cream-100">
              <dt className="text-charcoal-500 font-medium">Quantidade</dt>
              <dd className="text-charcoal-800">{order.quantity}</dd>
            </div>
          )}

          {order.amount && (
            <div className="flex justify-between items-center py-1 border-t border-cream-100">
              <dt className="text-charcoal-500 font-medium">Valor</dt>
              <dd className="text-wine-700 font-bold text-sm sm:text-base font-editorial">{order.amount}</dd>
            </div>
          )}

          {order.id && (
            <div className="flex justify-between items-center py-1 border-t border-cream-100">
              <dt className="text-charcoal-500 font-medium">Número do pedido</dt>
              <dd className="text-charcoal-700 font-mono text-xs">{order.id}</dd>
            </div>
          )}

          {maskedEmail && (
            <div className="flex justify-between items-center py-1 border-t border-cream-100">
              <dt className="text-charcoal-500 font-medium">E-mail de envio</dt>
              <dd className="text-charcoal-800 font-medium font-mono text-xs">{maskedEmail}</dd>
            </div>
          )}
        </dl>

        {/* Rodapé informativo discreto */}
        <div className="mt-5 pt-4 border-t border-cream-200/60 text-[11px] text-charcoal-500 leading-relaxed text-center sm:text-left">
          Um comprovante completo com todos os detalhes da transação também foi encaminhado para a sua caixa de entrada pela plataforma de pagamentos.
        </div>

      </div>
    </section>
  );
};
