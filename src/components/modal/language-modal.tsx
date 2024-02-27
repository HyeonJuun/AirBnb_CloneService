'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Divider, IconButton, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { TabPanel, TabContext } from '@mui/lab';
import LanguagePanel from '@/components/Panel/languagePanel';
import CurrencyPanel from '@/components/Panel/currencyPanel';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function LanguageModal() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('language');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <LanguageIcon />
      </IconButton>
      <Dialog
        open={open}
        fullWidth
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        scroll='paper'
      >
        <IconButton
          className='h-10 w-10'
          aria-label='close'
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <TabContext value={value}>
          <Tabs onChange={handleChange} value={value}>
            <Tab label='언어와 지역' value='language' />
            <Tab label='통화' value='currency' />
          </Tabs>
          <Divider />
          <TabPanel value='language'>
            <LanguagePanel onClosed={handleClose} />
          </TabPanel>
          <TabPanel value='currency'>
            <CurrencyPanel onClosed={handleClose} />
          </TabPanel>
        </TabContext>
      </Dialog>
    </React.Fragment>
  );
}
