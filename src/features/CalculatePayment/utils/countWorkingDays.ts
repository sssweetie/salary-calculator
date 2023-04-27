const WORKING_DAY_REG_EXP = /0/g;

export const countWorkingDays = (str: string) => {
  return str.match(WORKING_DAY_REG_EXP)?.length || 0;
};
