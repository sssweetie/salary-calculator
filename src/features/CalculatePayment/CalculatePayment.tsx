import React, { useState } from 'react';
import * as S from './styled';
import { useForm } from 'react-hook-form';
import { Salary } from './components/Salary';
import { WorkingHours } from './components/WorkingHours';
import { PickMonth } from './components/PickMonth';
import { Layout } from './components/Layout';
import { daysOffService } from './services/daysOffService';
import { parseYearMonth, stringifyYearMonth } from './utils';

export const CalculatePayment = () => {
  const [hourSalary, setHourSalary] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);

  interface Data {
    year: number;
    month: number;
    hours: number;
    salary: number;
    workingDays: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      yearMonth: stringifyYearMonth(new Date()),
      hours: 8,
      salary: 30000,
    },
  });

  const onSubmit = async ({ salary, hours, yearMonth }: any) => {
    const workingDays = await daysOffService(parseYearMonth(yearMonth));
    setWorkingDays(workingDays);
    setHourSalary(salary / hours / workingDays);
  };

  return (
    <Layout
      hourSalary={hourSalary}
      workingDays={workingDays}
      onSubmit={handleSubmit(onSubmit)}
      salary={
        <Salary
          register={register}
          fieldName="salary"
          error={Boolean(errors.salary)}
        />
      }
      workingHours={
        <WorkingHours
          register={register}
          fieldName="hours"
          error={Boolean(errors.hours)}
        />
      }
      pickMonth={
        <PickMonth register={register} fieldName="month" label={'Pick month'} />
      }
    />
  );
};
