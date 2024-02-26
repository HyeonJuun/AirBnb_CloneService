import React, { useState } from 'react';

export default function Pets({ handleClose }: { handleClose: () => void }) {
  const [pets, setPets] = useState(0);

  const handleIncrement = () => {
    if (pets < 5) {
      setPets(pets + 1);
    }
  };

  const handleDecrement = () => {
    if (pets > 1) {
      setPets(pets - 1);
    }
  };

  return (
    <>
      <div>반려동물</div>
      <button
        onClick={(e) => {
          handleDecrement();
          e.stopPropagation();
        }}
      >
        ⊖
      </button>
      <span>{pets}</span>
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
