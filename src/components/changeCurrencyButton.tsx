'use client';

import { CurrencyContext } from '@/contexts/currencyContextProvider';
import { Button, Grid } from '@mui/material';
import { useContext } from 'react';

function ChangeCurrencyButton({ eachcurrency, onClosed }) {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const CurrencyChange = (newValue: string) => {
    setCurrency(newValue);
    onClosed();
  };
  const isSelectedCurrency = (value) => {
    if (currency === eachcurrency) {
      return 'outlined';
    } else return 'text';
  };
  return (
    <>
      <Grid>
        <Button
          fullWidth
          color='secondary'
          variant={isSelectedCurrency(eachcurrency)}
          className=''
          onClick={() => {
            CurrencyChange(eachcurrency);
          }}
        >
          {eachcurrency.description} {eachcurrency.english}
        </Button>
      </Grid>
    </>
  );
}
export default ChangeCurrencyButton;
