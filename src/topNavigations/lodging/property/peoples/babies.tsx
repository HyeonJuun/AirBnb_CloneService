import React, { useState } from 'react';

export default function Babies({ handleClose }: { handleClose: () => void }) {
  const [babies, setBaies] = useState(0);

  const handleIncrement = () => {
    if (babies < 5) {
      setBaies(babies + 1);
    }
  };

  const handleDecrement = () => {
    if (babies > 1) {
      setBaies(babies - 1);
    }
  };

  return (
    <>
      <div>유아</div>
      <button
        onClick={(e) => {
          handleDecrement();
          e.stopPropagation();
        }}
      >
        ⊖
      </button>
      <span>{babies}</span>
      <button
        onClick={(e) => {
          handleIncrement();
          e.stopPropagation();
        }}
      >
        ⊕
      </button>
    </>
  );
}
