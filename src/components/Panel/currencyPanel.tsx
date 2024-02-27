import ChangeCurrencyButton from '@/components/changeCurrencyButton';
import {
  CURRENCIES,
  CurrencyContext,
} from '@/contexts/currencyContextProvider';
import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';

export default function currencyPanel({ onClosed }) {
  return (
    <>
      <Typography
        gutterBottom
        variant='h5'
        component='div'
        border='thick'
        textAlign='left'
      >
        통화를 선택하세요.
      </Typography>
      <Grid className='h-56 grid grid-cols-5 gap-1 hover:contrast-more'>
        {Object.values(CURRENCIES).map((eachcurrency, index) => {
          return (
            <ChangeCurrencyButton
              key={index}
              eachcurrency={eachcurrency}
              onClosed={onClosed}
            />
          );
        })}
      </Grid>
    </>
  );
}
