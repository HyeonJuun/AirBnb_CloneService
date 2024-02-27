import React, { useState } from 'react';

export default function Children({
  handleClose,
  addAdult,
}: {
  handleClose: () => void;
  addAdult: () => void;
}) {
  const [children, setChildren] = useState(0);

  const handleIncrement = () => {
    if (children < 15) {
      setChildren(children + 1);
    }
  };

  const handleDecrement = () => {
    if (children > 1) {
      setChildren(children - 1);
    }
  };

  return (
    <>
      <div>어린이</div>
      <button
        onClick={(e) => {
          handleDecrement();
          e.stopPropagation();
        }}
      >
        ⊖
      </button>
      <span>{children}</span>
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
