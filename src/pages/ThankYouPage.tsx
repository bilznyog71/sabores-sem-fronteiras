import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { OrderStatus, Order } from '../config/product';
import {
  PRODUCT_CONFIG,
  trackAnalyticsEvent,
  trackPurchaseConfirmedOnce,
} from '../config/product';
import { ThankYouHeader } from '../components/thank-you/ThankYouHeader';
import { ThankYouHero } from '../components/thank-you/ThankYouHero';
import { OrderSummaryCard } from '../components/thank-you/OrderSummaryCard';
import { WhatHappensNowSection } from '../components/thank-you/WhatHappensNowSection';
import { ProductValueReinforcement } from '../components/thank-you/ProductValueReinforcement';
import { FirstAccessTip } from '../components/thank-you/FirstAccessTip';
import { SupportSection } from '../components/thank-you/SupportSection';
import { PostPurchaseFaq } from '../components/thank-you/PostPurchaseFaq';
import { FinalAccessCta } from '../components/thank-you/FinalAccessCta';
import { ThankYouFooter } from '../components/thank-you/ThankYouFooter';
import { Check, Clock, AlertTriangle, HelpCircle } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Lê o status da URL de checkout ou padrão 'approved'
  const urlStatus = (searchParams.get('status') || 'approved').toLowerCase();
  
  // Valida o status para um dos valores seguros
  const initialStatus: OrderStatus = useMemo(() => {
    if (['approved', 'pending', 'failed', 'unknown'].includes(urlStatus)) {
      return urlStatus as OrderStatus;
    }
    return 'unknown';
  }, [urlStatus]);

  const [currentStatus, setCurrentStatus] = useState<OrderStatus>(initialStatus);

  // Sincroniza se a URL mudar
  useEffect(() => {
    setCurrentStatus(initialStatus);
  }, [initialStatus]);

  // Monta objeto do pedido a partir de parâmetros reais (ou demonstração limpa se fornecido)
  const order: Order = useMemo(() => {
    const rawOrderId = searchParams.get('order_id') || searchParams.get('pedido');
    const rawEmail = searchParams.get('email') || searchParams.get('customer_email');
    const rawAmount = searchParams.get('amount') || searchParams.get('valor');

    // Em ambiente de teste/demonstração quando nenhum parâmetro vem do checkout:
    const fallbackId = rawOrderId || (currentStatus !== 'unknown' ? '#MM-89210' : undefined);
    const fallbackEmail = rawEmail || (currentStatus !== 'unknown' ? 'cliente.exemplo@gmail.com' : undefined);
    const fallbackAmount = rawAmount || (currentStatus === 'approved' ? PRODUCT_CONFIG.price : undefined);

    return {
      id: fallbackId,
      status: currentStatus,
      productName: PRODUCT_CONFIG.name,
      format: "Produto digital",
      quantity: 1,
      amount: fallbackAmount,
      customerEmail: fallbackEmail,
    };
  }, [searchParams, currentStatus]);

  // Disparo seguro e deduplicado de eventos de Analytics
  useEffect(() => {
    trackAnalyticsEvent('purchase_page_view', {
      status: currentStatus,
      orderId: order.id,
    });

    if (currentStatus === 'approved') {
      trackPurchaseConfirmedOnce(order.id, {
        amount: order.amount,
        product: PRODUCT_CONFIG.name,
      });
    } else if (currentStatus === 'pending') {
      trackAnalyticsEvent('purchase_pending', {
        orderId: order.id,
      });
    }
  }, [currentStatus, order.id, order.amount]);

  // Função para simular verificação de status (recarregar dados)
  const handleRefreshStatus = () => {
    console.info('[Order Status] Verificando status do pedido junto ao provedor...');
    // Em produção, aqui seria realizada uma chamada de API segura
  };

  // Seletor visual discreto para testes de status (útil para homologação da equipe)
  const setSimulatedStatus = (newStatus: OrderStatus) => {
    setCurrentStatus(newStatus);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('status', newStatus);
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800 font-sans-body flex flex-col selection:bg-wine-700 selection:text-white">
      
      {/* Barra de Homologação / Troca Rápida de Status (discreta no topo) */}
      <div className="bg-charcoal-900 text-cream-200 py-1.5 px-3 text-[11px] font-mono border-b border-charcoal-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-gold-400 font-semibold">Simulador de Status:</span>
          <span className="text-charcoal-400 hidden sm:inline">Alterne para testar os 4 cenários pós-compra:</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSimulatedStatus('approved')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${
              currentStatus === 'approved' ? 'bg-olive-600 text-white shadow' : 'bg-charcoal-800 text-charcoal-300 hover:text-white'
            }`}
          >
            <Check className="w-2.5 h-2.5" /> Aprovado
          </button>
          <button
            onClick={() => setSimulatedStatus('pending')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${
              currentStatus === 'pending' ? 'bg-gold-600 text-white shadow' : 'bg-charcoal-800 text-charcoal-300 hover:text-white'
            }`}
          >
            <Clock className="w-2.5 h-2.5" /> Pendente
          </button>
          <button
            onClick={() => setSimulatedStatus('failed')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${
              currentStatus === 'failed' ? 'bg-wine-700 text-white shadow' : 'bg-charcoal-800 text-charcoal-300 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-2.5 h-2.5" /> Falha
          </button>
          <button
            onClick={() => setSimulatedStatus('unknown')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${
              currentStatus === 'unknown' ? 'bg-charcoal-600 text-white shadow' : 'bg-charcoal-800 text-charcoal-300 hover:text-white'
            }`}
          >
            <HelpCircle className="w-2.5 h-2.5" /> Em análise
          </button>
        </div>
      </div>

      {/* Header Minimalista */}
      <ThankYouHeader />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Seção Principal de Status (Primeira Dobra) */}
        <ThankYouHero
          status={currentStatus}
          orderId={order.id}
          onRefreshStatus={handleRefreshStatus}
        />

        {/* Resumo Elegante do Pedido */}
        <OrderSummaryCard order={order} />

        {/* Seção "E agora?" em 3 passos */}
        <WhatHappensNowSection />

        {/* Reforço do Valor do Produto */}
        <ProductValueReinforcement />

        {/* Dica de Primeiro Acesso */}
        <FirstAccessTip />

        {/* Suporte Claro */}
        <SupportSection />

        {/* FAQ Pós-Compra */}
        <PostPurchaseFaq />

        {/* CTA Final */}
        <FinalAccessCta status={currentStatus} orderId={order.id} />
      </main>

      {/* Rodapé Minimalista */}
      <ThankYouFooter />

    </div>
  );
};

export default ThankYouPage;
