'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Europe from '@/topNavigations/lodging/property/worlds/europe';
import FlexibleSearch from '@/topNavigations/lodging/property/worlds/flexibleSearch';
import Japan from '@/topNavigations/lodging/property/worlds/japan';
import SoutheastAsia from '@/topNavigations/lodging/property/worlds/southeastasia';
import Seoul from '@/topNavigations/lodging/property/citys/seoul';
import Busan from '@/topNavigations/lodging/property/citys/busan';
import Sokcho from '@/topNavigations/lodging/property/citys/sokcho';
import Gangneung from '@/topNavigations/lodging/property/citys/gangneung';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        여행지
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
        <div>지역으로 검색하기</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
          <MenuItem
            style={{ flex: '1 0 25%', fontSize: '12px' }}
            onClick={handleClose}
          >
            <FlexibleSearch />
          </MenuItem>
          <MenuItem
            style={{ flex: '1 0 25%', fontSize: '12px' }}
            onClick={handleClose}
          >
            <Europe />
          </MenuItem>
          <MenuItem
            style={{ flex: '1 0 25%', fontSize: '12px' }}
            onClick={handleClose}
          >
            <Japan />
          </MenuItem>
          <MenuItem
            style={{ flex: '1 0 25%', fontSize: '12px' }}
            onClick={handleClose}
          >
            <SoutheastAsia />
          </MenuItem>
          <div>한국</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
            <MenuItem
              style={{ flex: '1 0 25%', fontSize: '12px' }}
              onClick={handleClose}
            >
              <Seoul />
            </MenuItem>
            <MenuItem
              style={{ flex: '1 0 25%', fontSize: '12px' }}
              onClick={handleClose}
            >
              <Busan />
            </MenuItem>
            <MenuItem
              style={{ flex: '1 0 25%', fontSize: '12px' }}
              onClick={handleClose}
            >
              <Sokcho />
            </MenuItem>
            <MenuItem
              style={{ flex: '1 0 25%', fontSize: '12px' }}
              onClick={handleClose}
            >
              <Gangneung />
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
