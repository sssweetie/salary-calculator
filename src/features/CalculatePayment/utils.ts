export const stringifyYearMonth = (date: Date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}`;
};

export const parseYearMonth = (str: string) => {
  const [year, month] = str.split('-');
  return { year, month };
};
