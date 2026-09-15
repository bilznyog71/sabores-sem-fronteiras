import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { trackAnalyticsEvent } from '../config/product';
import { ThankYouHeader } from '../components/thank-you/ThankYouHeader';
import { ThankYouHero } from '../components/thank-you/ThankYouHero';
import { ThankYouProductCard } from '../components/thank-you/ThankYouProductCard';
import { HowToAccessSection } from '../components/thank-you/HowToAccessSection';
import { SecondDownloadCta } from '../components/thank-you/SecondDownloadCta';
import { ThankYouSupportSection } from '../components/thank-you/ThankYouSupportSection';
import { ThankYouFaqSection } from '../components/thank-you/ThankYouFaqSection';
import { ThankYouFooter } from '../components/thank-you/ThankYouFooter';

export const ThankYouPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Parâmetros de segurança e rastreamento da transação (Hotmart / Kiwify / Stripe / Gateway)
  const securityContext = useMemo(() => {
    const token = searchParams.get('token') || undefined;
    const orderId = searchParams.get('order_id') || searchParams.get('pedido') || undefined;
    const transactionId = searchParams.get('transaction_id') || searchParams.get('transacao') || undefined;

    return { token, orderId, transactionId };
  }, [searchParams]);

  // Disparo do evento oficial thank_you_page_view
  useEffect(() => {
    trackAnalyticsEvent('thank_you_page_view', {
      orderId: securityContext.orderId,
      tokenPresent: Boolean(securityContext.token),
      page: '/obrigado',
    });
  }, [securityContext]);

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800 font-sans-body flex flex-col selection:bg-wine-700 selection:text-white overflow-x-hidden">
      
      {/* 1. Header Minimalista */}
      <ThankYouHeader />

      {/* 2. Conteúdo Principal */}
      <main className="flex-1">
        
        {/* Primeira Dobra: Hero com Check, Textos Oficiais e Botão de Download */}
        <ThankYouHero
          orderId={securityContext.orderId}
          token={securityContext.token}
          transactionId={securityContext.transactionId}
        />

        {/* Card do Produto Adquirido com Mockup Compacto */}
        <ThankYouProductCard />

        {/* Instruções: "Como acessar" em 3 passos */}
        <HowToAccessSection />

        {/* Segundo CTA de Download */}
        <SecondDownloadCta
          orderId={securityContext.orderId}
          token={securityContext.token}
          transactionId={securityContext.transactionId}
        />

        {/* Seção de Suporte */}
        <ThankYouSupportSection />

        {/* FAQ Curto de Download e Acesso */}
        <ThankYouFaqSection />

      </main>

      {/* 3. Rodapé Minimalista */}
      <ThankYouFooter />

    </div>
  );
};

export default ThankYouPage;
