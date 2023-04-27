import { countWorkingDays } from './countWorkingDays';

describe('countWorkingDays', () => {
  it('returns number of working days', () => {
    const str = '0,1,0';
    const result = countWorkingDays(str);
    expect(result).toBe(2);
  });
  it('returns zero when you get empty string', () => {
    const str = '';
    const result = countWorkingDays(str);
    expect(result).toBe(0);
  });
});
