import { stringifyYearMonth } from './stringifyYearMonth';

describe('stringifyYearMonth', () => {
  test('stringifyYearMonth correctly stringify the date format', () => {
    const date = new Date('2023, 04');
    const result = stringifyYearMonth(date);
    expect(result).toBe('2023-04');
  });
});
