import React from 'react';
import Image from 'next/image';
import jap from '@public/jap.png';

const Japan = () => {
  return (
    <>
      <div>
        일본
        <Image src={jap} alt='jap image' width={100} height={100} />
      </div>
    </>
  );
};

export default Japan;
