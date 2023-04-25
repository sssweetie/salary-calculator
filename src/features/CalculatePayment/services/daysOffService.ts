import axios from 'axios';

type GetWorkingDays = {
  year: number;
  month: number;
};

export const daysOffService = async ({
  year,
  month,
}: GetWorkingDays): Promise<number> => {
  const response = await axios.get<string>(
    `https://isdayoff.ru/api/getdata?year=${year}&month=${month}&pre=[1]&sd=[1]&delimeter=,`
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
