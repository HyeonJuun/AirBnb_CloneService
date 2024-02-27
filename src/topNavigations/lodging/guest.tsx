'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Adults from '@/topNavigations/lodging/property/peoples/adults';
import Children from '@/topNavigations/lodging/property/peoples/children';
import Babies from '@/topNavigations/lodging/property/peoples/babies';
import Pets from '@/topNavigations/lodging/property/peoples/pets';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [adulttest, setAdulttest] = React.useState(0);

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        여행자
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Adults handleClose={handleClose} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Children
            handleClose={handleClose}
            addAdult={() => {
              if (adulttest < 15) {
                setAdulttest(adulttest + 1);
              }
            }}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Babies handleClose={handleClose} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Pets handleClose={handleClose} />
        </MenuItem>
      </Menu>
    </div>
  );
}
