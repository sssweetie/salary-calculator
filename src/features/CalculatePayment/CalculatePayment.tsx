import React, { useState } from 'react';
import * as S from './styled';
import { useForm } from 'react-hook-form';
import { Salary } from './components/Salary';
import { WorkingHours } from './components/WorkingHours';
import { PickMonth } from './components/PickMonth';
import { Layout } from './components/Layout';
import { daysOffService } from './services/daysOffService';
import { parseYearMonth, stringifyYearMonth } from './utils';
import { Output } from './components/Output';

export const CalculatePayment = () => {
  const [hourSalary, setHourSalary] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);

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
      form={
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Salary
            register={register}
            fieldName="salary"
            error={Boolean(errors.salary)}
          />
          <WorkingHours
            register={register}
            fieldName="hours"
            error={Boolean(errors.hours)}
          />
          <PickMonth
            register={register}
            fieldName="yearMonth"
            label={'Pick month'}
            error={Boolean(errors.yearMonth)}
          />
          <S.SubmitButton type="submit">submit</S.SubmitButton>
        </S.Form>
      }
      output={
        <Output hourSalary={hourSalary} workingDays={workingDays}></Output>
      }
    />
  );
};
