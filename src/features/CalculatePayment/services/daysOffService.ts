import axios from 'axios';
import { countWorkingDays } from '../utils';

export const daysOffService = {
  getWorkingDays: async ({
    year,
    month,
  }: {
    year: string;
    month: string;
  }): Promise<number> => {
    const response = await axios.get<string>(
      `https://isdayoff.ru/api/getdata?year=${year}&month=${month}&pre=[1]&sd=[1]&delimeter=,`
    );
    
    return countWorkingDays(response.data);
  },
};
