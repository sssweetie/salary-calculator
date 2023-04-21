import React, { useState } from 'react';

export const WorkingHours = () => {
  const [hours, setHours] = useState(8);
  const onlyNumbers = new RegExp(/^\d+$/);
  const inputHandler = (value: any) => {
    if ((onlyNumbers.test(value) && value > 0 && value <= 24) || value === '') {
      setHours(value);
    }
  };

  return (
    <input
      min={0}
      max={24}
      value={hours}
      onChange={(e) => inputHandler(e.target.value)}
    />
  );
};
