import React, { useState } from 'react';
import * as S from './styled';
import { useForm } from 'react-hook-form';
import { Payment } from './components/Payment';
import { WorkingHours } from './components/WorkingHours';
import { PickDate } from './components/PickDate';
import { Layout } from './components/Layout';
import { daysOffService } from './services/daysOffService';

export const CalculatePayment = () => {
  const [hourSalary, setHourSalary] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      hours: 8,
      salary: 30000,
      workingDays,
    },
  });
  const SubmitHandler = async (data: any) => {
    const result = await daysOffService(data);
    setWorkingDays(result);
    const paymentPerHours = data.payment / workingDays / data.hours;
    setHourSalary(paymentPerHours);
  };
  return (
    <Layout
      salary={hourSalary}
      workingDays={workingDays}
      onSubmit={handleSubmit((data) => SubmitHandler(data))}
      payment={
        <Payment
          register={register}
          fieldName="salary"
          error={Boolean(errors.salary)}
        />
      }
      workingHours={
        <WorkingHours
          register={register}
          fieldName="hours"
          error={Boolean(errors.salary)}
        />
      }
      pickMonth={
        <PickDate
          register={register}
          fieldName="month"
          maximumDate={12}
          difference={11}
          inputName={'Pick month'}
        />
      }
      pickYear={
        <PickDate
          register={register}
          fieldName="year"
          maximumDate={2023}
          difference={100}
          inputName="Pick year"
        />
      }
    />
  );
};
