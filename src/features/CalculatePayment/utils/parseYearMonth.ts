export const parseYearMonth = (
  str: string
): { year: string; month: string } => {
  const [year, month] = str.split('-');
  return { year, month };
};
