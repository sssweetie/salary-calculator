import React, { useState } from 'react';

export const Payment = () => {
  const onlyNumbers = new RegExp(/^\d+$/);
  const [value, setValue] = useState('');
  const inputHandler = (value: any) => {
    if (onlyNumbers.test(value) || value === '') {
      setValue(value);
    }
  };

  return (
    <input value={value} onChange={(e) => inputHandler(e.target.value)}></input>
  );
};
