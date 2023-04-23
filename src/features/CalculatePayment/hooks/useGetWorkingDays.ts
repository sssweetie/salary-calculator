import React from 'react';
import axios from 'axios';

interface GetWorkingDays {
  event: SubmitEvent;
  year: number;
  month: number;
}

export const useGetWorkingDays = async ({
  event,
  year,
  month,
}: GetWorkingDays) => {
  const response = await axios.get(
    `https://isdayoff.ru/api/getdata?year=${year}&month=${
      month < 10 ? '0' + month : month
    }&pre=[1]&sd=[1]&delimeter=,`
  );

  const weekendsArray = response.data
    .split(',')
    .map((symbol: string) => +symbol);

  const weekends = weekendsArray.reduce(
    (prevValue: number, currentValue: number) => prevValue + currentValue,
    0
  );

  const getDays = (year: number, month: number): number => {
    const date = new Date(year, month, 0).getDate();
    return date;
  };

  const output = getDays(year, month) - weekends;
  event.preventDefault();
  return output;
};
