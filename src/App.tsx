import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { CheckoutRedirectProvider } from './components/CheckoutRedirectModal';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CheckoutRedirectProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </CheckoutRedirectProvider>
    </BrowserRouter>
  );
};

export default App;
