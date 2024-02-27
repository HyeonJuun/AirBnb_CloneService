'use client';

import CurrencyContextProvider from '@/contexts/currencyContextProvider';

export function Providers({ children }) {
  return <CurrencyContextProvider>{children}</CurrencyContextProvider>;
}
