'use client';

import { CurrencyContext } from '@/contexts/currencyContextProvider';
import { useContext } from 'react';

export default function Body() {
  const { currency } = useContext(CurrencyContext);
  return (
    <>
      <div>
        <div className='relative h-32 w-32'>
          <h2>바디 영역</h2>
          <h2>통화 : 10000 {currency.description}</h2>
        </div>
      </div>
    </>
  );
}
