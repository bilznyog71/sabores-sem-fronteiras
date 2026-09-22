import { createContext, useContext } from 'react';

export interface CheckoutRedirectContextType {
  isRedirecting: boolean;
  startRedirect: (customUrl?: string) => void;
  cancelRedirect: () => void;
}

export const CheckoutRedirectContext = createContext<CheckoutRedirectContextType>({
  isRedirecting: false,
  startRedirect: () => {},
  cancelRedirect: () => {},
});

export const useCheckoutRedirect = () => useContext(CheckoutRedirectContext);
