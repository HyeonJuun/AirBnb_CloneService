import React from 'react';
import Image from 'next/image';
import world from '@public/world.png';

const FlexibleSearch = () => {
  return (
    <div>
      유연한 검색
      <Image src={world} alt='world image' width={100} height={100} />
    </div>
  );
};

export default FlexibleSearch;
