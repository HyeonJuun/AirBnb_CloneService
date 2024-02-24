'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Divider, IconButton, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { TabPanel, TabContext } from '@mui/lab';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
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
        <HomeIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
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
          <TabPanel value='language'>언어와 지역을 선택하세요</TabPanel>
          <TabPanel value='currency'>통화를 선택하세요</TabPanel>
        </TabContext>
      </Dialog>
    </React.Fragment>
  );
}
