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
import { MenuList } from '@mui/material';
import eu from '@public/eu.png';
import jap from '@public/jap.png';
import south from '@public/south.png';
import Image from 'next/image';

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
      <Button id='basic-button' onClick={handleClick}>
        여행지
      </Button>
      <Menu
        id='basic-menu'
        className=''
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div>지역으로 검색하기</div>
        <div className='flex flex-col'>
          <div className=''>
            <div>일본</div>
            <div>
              <Image src={jap} alt='jap image' width={100} height={100} />
            </div>
          </div>
          <div className=''>
            <div>일본</div>
            <div>
              <Image src={jap} alt='jap image' width={100} height={100} />
            </div>
          </div>
          <div className=''>
            <div>일본</div>
            <div>
              <Image src={jap} alt='jap image' width={100} height={100} />
            </div>
          </div>
          <div className=''>
            <div>일본</div>
            <div>
              <Image src={jap} alt='jap image' width={100} height={100} />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
