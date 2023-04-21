import React from 'react';

interface Props {
  maximumDate: number;
  difference: number;
}

export const useDate = ({ maximumDate, difference }: Props): Array<number> => {
  const max = maximumDate;
  const min = maximumDate - difference;
  const date = [];
  for (let i = max; i >= min; i--) {
    date.push(i);
  }
  return date;
};
