import React from 'react';
import Image from 'next/image';
import eu from '@public/eu.png';

const Europe = () => {
  return (
    <div>
      유럽
      <Image src={eu} alt='eu image' width={100} height={100} />
    </div>
  );
};

export default Europe;
