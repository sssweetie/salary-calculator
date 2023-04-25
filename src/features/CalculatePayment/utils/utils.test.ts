import { stringifyYearMonth, parseYearMonth } from './utils';

test('Converting current date to string format', () => {
  expect(stringifyYearMonth(new Date())).toBe('2023-04');
});

test('Date string splitting on 2 numbers', () => {
  expect(parseYearMonth('2023-04')).toStrictEqual({
    year: '2023',
    month: '04',
  });
});
