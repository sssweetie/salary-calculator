import axios from 'axios';

const WORKING_DAY_REG_EXP = /0/g;

type GetWorkingDays = {
  year: string;
  month: string;
};

export const daysOffService = async ({
  year,
  month,
}: GetWorkingDays): Promise<number> => {
  const response = await axios.get<string>(
    `https://isdayoff.ru/api/getdata?year=${year}&month=${month}&pre=[1]&sd=[1]&delimeter=,`
  );
  return response.data.match(WORKING_DAY_REG_EXP)!.length;
};
