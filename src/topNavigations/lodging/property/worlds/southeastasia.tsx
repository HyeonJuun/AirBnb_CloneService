import React from 'react';
import Image from 'next/image';
import south from '@public/south.png';

const SoutheastAsia = () => {
  return (
    <>
      <div>
        동남아시아
        <Image src={south} alt='south image' width={100} height={100} />
      </div>
      ;
    </>
  );
};

export default SoutheastAsia;
