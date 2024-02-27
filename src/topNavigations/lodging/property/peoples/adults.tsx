import React, { useState } from 'react';

export default function Adults({ handleClose }: { handleClose: () => void }) {
  const [adults, setAdults] = useState(0);

  const handleIncrement = () => {
    setAdults(adults + 1);
  };

  const handleDecrement = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  return (
    <>
      <div>성인</div>
      <button
        onClick={(e) => {
          handleDecrement();
          e.stopPropagation();
        }}
      >
        ⊖
      </button>
      <span>{adults}</span>
      <button
        disabled={adults >= 16}
        onClick={(e) => {
          handleIncrement();
          e.stopPropagation();
        }}
        className='flex justify-end'
      >
        ⊕
      </button>
    </>
  );
}
