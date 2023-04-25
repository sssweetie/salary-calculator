import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { Payment } from './components/Payment';
import { WorkingHours } from './components/WorkingHours';
import { PickDate } from './components/PickDate';
import { useGetWorkingDays } from './hooks/useGetWorkingDays';
import { Date } from './types';
import { Layout } from './components/Layout';

export const CalculatePayment = () => {
  const [formState, setFormState] = useState<Date>({
    month: 12,
    year: 2023,
    hours: 8,
    payment: '',
    workingDays: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formState,
    },
  });

  const SubmitHandler = async (data: Date) => {
    setFormState((prevState) => ({
      ...prevState,
      month: +data.month,
      year: +data.year,
    }));

    const workingDays = await useGetWorkingDays(formState);

    const paymentPerHours = (
      +data.payment /
      (workingDays * data.hours)
    ).toFixed(1);

    setFormState((prevState) => ({
      ...prevState,
      payment: paymentPerHours.toString(),
      workingDays: workingDays.toString(),
    }));
  };

  return (
    <Layout
      formState={formState}
      errors={errors}
      onSubmit={handleSubmit((data) => SubmitHandler(data))}
      payment={
        <Payment
          initialPayment={formState.payment}
          register={register}
          fieldName="payment"
          error={errors.payment ? true : false}
        />
      }
      workingHours={
        <WorkingHours
          initialHours={formState.hours}
          register={register}
          fieldName="hours"
          error={errors.hours ? true : false}
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
