import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PRODUCT_CONFIG } from '../config/product';
import { ShieldCheck, Lock, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { CheckoutRedirectContext } from '../context/CheckoutRedirectContext';

interface ProviderProps {
  children: React.ReactNode;
}

export const CheckoutRedirectProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [targetUrl, setTargetUrl] = useState<string>(PRODUCT_CONFIG.checkoutUrl);
  const progressTimerRef = useRef<number | null>(null);
  const redirectTimerRef = useRef<number | null>(null);

  const cancelRedirect = useCallback(() => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    setIsRedirecting(false);
    setProgress(0);
  }, []);

  const startRedirect = useCallback((customUrl?: string) => {
    const url = customUrl || PRODUCT_CONFIG.checkoutUrl;
    setTargetUrl(url);
    setIsRedirecting(true);
    setProgress(8);

    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);

    const startTime = Date.now();
    const duration = 1500; // 1.5s total de animação suave e profissional

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      }
    }, 30);

    redirectTimerRef.current = setTimeout(() => {
      window.location.href = url;
    }, duration + 100);
  }, []);

  // Intercepta automaticamente cliques em links que apontam para o checkout
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Ignora cliques com modificadores (abrir em nova aba intencionalmente)
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const isCheckoutLink =
        href.includes('carrinho.app') ||
        href === PRODUCT_CONFIG.checkoutUrl ||
        target.hasAttribute('data-checkout-trigger');

      if (isCheckoutLink) {
        e.preventDefault();
        startRedirect(href || PRODUCT_CONFIG.checkoutUrl);
      }
    };

    document.addEventListener('click', handleGlobalClick, false);
    return () => {
      document.removeEventListener('click', handleGlobalClick, false);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    };
  }, [startRedirect]);

  // Textos e status dinâmicos conforme o progresso
  let stageTitle = 'Iniciando Conexão Segura...';
  let stageSubtitle = 'Estabelecendo criptografia SSL de 256 bits com o servidor.';
  let StageIcon = ShieldCheck;

  if (progress > 38 && progress <= 78) {
    stageTitle = 'Garantindo Condições da Oferta...';
    stageSubtitle = 'Reservando o valor promocional com acesso imediato às 120 receitas.';
    StageIcon = Sparkles;
  } else if (progress > 78) {
    stageTitle = 'Redirecionando para o Checkout Oficial...';
    stageSubtitle = 'Você está sendo transferido com segurança para concluir seu pedido.';
    StageIcon = ArrowRight;
  }

  return (
    <CheckoutRedirectContext.Provider value={{ isRedirecting, startRedirect, cancelRedirect }}>
      {children}

      {/* Modal Overlay de Carregamento Profissional */}
      {isRedirecting && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Carregando ambiente seguro de pagamento"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md transition-opacity duration-300"
        >
          <div className="relative w-full max-w-md bg-[#161413] border border-gold-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-center">
            {/* Efeitos de iluminação sutil no fundo */}
            <div className="absolute -top-16 -left-16 w-44 h-44 bg-wine-700/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Linha superior com gradiente animado */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wine-700 via-gold-400 to-wine-700 animate-pulse" />

            {/* Cabeçalho da Marca */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="font-editorial text-lg sm:text-xl font-bold text-white tracking-tight">
                {PRODUCT_CONFIG.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-[11px] text-cream-300/80 uppercase tracking-widest font-semibold">
                Checkout Seguro
              </span>
            </div>

            {/* Ícone Central com Anéis de Carregamento */}
            <div className="relative mx-auto w-20 h-20 mb-5 flex items-center justify-center">
              {/* Anel giratório externo */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 border-t-gold-400 animate-spin" />
              {/* Anel pulsante interno */}
              <div className="absolute inset-1.5 rounded-full border border-wine-500/30 animate-pulse" />
              {/* Núcleo */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-gold-400/40 flex items-center justify-center shadow-lg shadow-gold-500/10">
                <StageIcon className="w-7 h-7 text-gold-400 stroke-[1.8] transition-transform duration-300" />
              </div>
            </div>

            {/* Textos de Status Dinâmicos */}
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-cream-100 mb-2 transition-all duration-200">
              {stageTitle}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-400 font-sans-body leading-relaxed mb-6 max-w-sm mx-auto">
              {stageSubtitle}
            </p>

            {/* Barra de Progresso Estilizada */}
            <div className="relative w-full h-2.5 bg-charcoal-900 rounded-full overflow-hidden p-0.5 border border-charcoal-800 mb-3 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-wine-600 via-gold-400 to-amber-300 transition-all duration-100 ease-out shadow-sm shadow-gold-400/50"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Indicador de Status e Porcentagem */}
            <div className="flex items-center justify-between text-[11px] text-charcoal-400 font-medium mb-6 px-1">
              <span className="inline-flex items-center gap-1.5 text-gold-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Ambiente Criptografado
              </span>
              <span className="font-mono text-cream-200 font-bold">{progress}%</span>
            </div>

            {/* Selos de Segurança e Confiança */}
            <div className="pt-4 border-t border-charcoal-800/80 grid grid-cols-3 gap-2 text-[10px] text-charcoal-400">
              <div className="flex items-center justify-center gap-1.5 py-1">
                <Lock className="w-3.5 h-3.5 text-gold-400/90" />
                <span>SSL 256 bits</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Acesso Imediato</span>
              </div>
            </div>

            {/* Fallback de contingência */}
            <p className="mt-4 text-[11px] text-charcoal-500">
              Não foi redirecionado?{' '}
              <a
                href={targetUrl}
                className="text-gold-400 underline hover:text-gold-300 font-medium"
              >
                Clique aqui para abrir
              </a>
            </p>
          </div>
        </div>
      )}
    </CheckoutRedirectContext.Provider>
  );
};
