import { createContext, useState } from 'react';

const KOREA_WON = {
  english: '한국 원',
  description: 'KRW',
};

const US_DOLLER = {
  english: '미국 달러',
  description: 'USD',
};
export const CURRENCIES = {
  KOREA_WON,
  US_DOLLER,
};

export const CurrencyContext = createContext({
  currency: KOREA_WON,
  setCurrency: ({}) => {},
});

function CurrencyContextProvider({ children }) {
  const [currency, setCurrency] = useState(KOREA_WON);
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContextProvider;
