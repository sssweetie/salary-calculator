import React, { useState } from 'react';
import * as S from './styled';
import { useForm } from 'react-hook-form';
import { Layout } from './components/Layout';
import { daysOffService } from './services/daysOffService';
import { parseYearMonth, stringifyYearMonth } from './utils';
import { Output } from './components/Output';
import { TextField } from './components/TextField';
import { SalaryData } from './types';

const MAX_HOURS = 24;

export const CalculatePayment: React.FC = () => {
  const [hourSalary, setHourSalary] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<SalaryData>({
    defaultValues: {
      yearMonth: stringifyYearMonth(new Date()),
      hours: 8,
      salary: 30000,
    },
  });

  const onSubmit = async ({ salary, hours, yearMonth }: SalaryData) => {
    try {
      const workingDays = await daysOffService.getWorkingDays(
        parseYearMonth(yearMonth)
      );
      setWorkingDays(workingDays);
      setHourSalary(salary / hours / workingDays);
    } catch (error) {
      console.error(error);
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
            control={control}
            name="salary"
          />
          <TextField
            label="Hours per day"
            type="number"
            control={control}
            name="hours"
            max={MAX_HOURS}
          />
          <TextField
            label="Date"
            type="month"
            control={control}
            name="yearMonth"
          />
          <S.SubmitButton disabled={!isValid} type="submit">
            Submit
          </S.SubmitButton>
        </S.Form>
      }
      output={<Output hourSalary={hourSalary} workingDays={workingDays} />}
    />
  );
};
