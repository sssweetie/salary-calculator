import { parseYearMonth } from './parseYearMonth';

describe('parseYearMonth', () => {
  test('parseYearMonth returns the correct year and month', () => {
    const str = '2023-04';
    const result = parseYearMonth(str);
    expect(result).toStrictEqual({ year: '2023', month: '04' });
  });
});
