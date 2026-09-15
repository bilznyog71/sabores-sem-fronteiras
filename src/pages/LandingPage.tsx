import React, { useEffect } from 'react';
import { TopBanner } from '../components/TopBanner';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { VisualStrip } from '../components/VisualStrip';
import { CuisinesSection } from '../components/CuisinesSection';
import { FeaturedRecipesSection } from '../components/FeaturedRecipesSection';
import { EmotionalBenefitSection } from '../components/EmotionalBenefitSection';
import { WhatYouGetSection } from '../components/WhatYouGetSection';
import { InsidePreviewSection } from '../components/InsidePreviewSection';
import { AudienceSection } from '../components/AudienceSection';
import { ObjectionBreakerSection } from '../components/ObjectionBreakerSection';
import { OfferSection } from '../components/OfferSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';
import { StickyMobileCta } from '../components/StickyMobileCta';
import { trackAnalyticsEvent } from '../config/product';

export const LandingPage: React.FC = () => {
  // Observa visualização da oferta para evento de conversão
  useEffect(() => {
    const offerElement = document.getElementById('oferta');
    if (!offerElement) return;

    let hasTracked = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTracked) {
          hasTracked = true;
          trackAnalyticsEvent('view_offer');
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(offerElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800 font-sans-body flex flex-col selection:bg-wine-700 selection:text-white">
      {/* Barra Fina de Topo */}
      <TopBanner />

      {/* Header Sticky com Transição */}
      <Header />

      {/* Seções da Landing Page */}
      <main className="flex-1">
        <HeroSection />
        <VisualStrip />
        <CuisinesSection />
        <FeaturedRecipesSection />
        <EmotionalBenefitSection />
        <WhatYouGetSection />
        <InsidePreviewSection />
        <AudienceSection />
        <ObjectionBreakerSection />
        <OfferSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      {/* Rodapé Minimalista */}
      <Footer />

      {/* CTA Sticky Mobile */}
      <StickyMobileCta />
    </div>
  );
};

export default LandingPage;
