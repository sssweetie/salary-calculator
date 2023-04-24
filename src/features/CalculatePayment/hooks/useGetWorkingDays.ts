import React from 'react';
import axios from 'axios';

interface GetWorkingDays {
  year: number;
  month: number;
}

export const useGetWorkingDays = async ({ year, month }: GetWorkingDays) => {
  const response = await axios.get(
    `https://isdayoff.ru/api/getdata?year=${year}&month=${
      month < 10 ? '0' + month : month
    }&pre=[1]&sd=[1]&delimeter=,`
  );

  const weekendsArray = response.data.split(',').map((symbol: string) => {
    const symbolToBoolean = !+symbol;
    return +symbolToBoolean;
  });

  const getTotalDays = weekendsArray.reduce(
    (prevValue: number, currentValue: number) => prevValue + currentValue,
    0
  );

  return getTotalDays;
};
