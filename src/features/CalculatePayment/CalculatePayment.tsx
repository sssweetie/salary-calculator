import React, { useState } from 'react';
import * as S from './styled';
import { useForm } from 'react-hook-form';
import { Layout } from './components/Layout';
import { daysOffService } from './services/daysOffService';
import { parseYearMonth, stringifyYearMonth } from './utils';
import { Output } from './components/Output';
import { TextField } from './components/TextField';
import { SalaryData } from './types';
import { Error } from './components/Error';

const INIT_SALARY = 30000;
const INIT_HOURS = 8;
const MIN_HOURS = 1;
const MAX_HOURS = 24;

export const CalculatePayment: React.FC = () => {
  const [hourSalary, setHourSalary] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | undefined>();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<SalaryData>({
    mode: 'onChange',
    defaultValues: {
      yearMonth: stringifyYearMonth(new Date()),
      hours: INIT_HOURS,
      salary: INIT_SALARY,
    },
  });

  const onSubmit = async ({ salary, hours, yearMonth }: SalaryData) => {
    try {
      setLoading(true);
      const workingDays = await daysOffService.getWorkingDays(
        parseYearMonth(yearMonth)
      );
      setWorkingDays(workingDays);
      setHourSalary(salary / hours / workingDays);
    } catch (error) {
      setServerError('Failed to fetch response');
      setWorkingDays(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      form={
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormName>Salary calculator</S.FormName>
          <TextField
            label="Salary"
            type="number"
            disabled={isLoading}
            control={control}
            name="salary"
            required={true}
          />
          <TextField
            label="Hours per day"
            type="number"
            disabled={isLoading}
            control={control}
            name="hours"
            min={MIN_HOURS}
            max={MAX_HOURS}
            required={true}
          />
          <TextField
            label="Date"
            type="month"
            disabled={isLoading}
            control={control}
            name="yearMonth"
            required={true}
          />
          <S.SubmitButton disabled={!isValid || isLoading} type="submit">
            {isLoading ? 'Calculating...' : 'Calculate'}
          </S.SubmitButton>
        </S.Form>
      }
      output={<Output hourSalary={hourSalary} workingDays={workingDays} />}
      serverError={<Error>{serverError}</Error>}
    />
  );
};
