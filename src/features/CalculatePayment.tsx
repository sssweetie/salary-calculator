import React, { useState } from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickDate } from './CalculatePayment/components/PickDate';
import * as S from './styled';
import { useGetWorkingDays } from './CalculatePayment/hooks/useGetWorkingDays';
import { useForm } from 'react-hook-form';
import { Date } from '../libs/types/features/CalculatePayment';

export const CalculatePayment = () => {
  const [formState, setFormState] = useState({
    month: 12,
    year: 2023,
    hours: 8,
    payment: '',
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
      month: Number(data.month),
      year: Number(data.year),
    }));

    const workingDays = await useGetWorkingDays(formState);

    const paymentPerHours =
      Math.round(Number(data.payment) / (workingDays * data.hours)) / 10;

    setFormState((prevState) => ({
      ...prevState,
      payment: paymentPerHours.toString(),
    }));
  };

  return (
    <S.Wrapper onSubmit={handleSubmit((data) => SubmitHandler(data))}>
      <S.InputFieldWrapper>
        <label>Input payment</label>
        <Payment
          initialPayment={formState.payment}
          register={register}
          fieldName="payment"
          error={errors.payment ? true : false}
        />
        {errors.payment && <S.Error>{errors.payment?.message}</S.Error>}
      </S.InputFieldWrapper>

      <S.InputFieldWrapper>
        <label>Input hours</label>
        <WorkingHours
          initialHours={formState.hours}
          register={register}
          fieldName="hours"
        />
      </S.InputFieldWrapper>
      <S.DataPicker>
        <S.InputFieldWrapper>
          <label>Pick month</label>
          <PickDate
            register={register}
            fieldName="month"
            maximumDate={formState.month}
            difference={11}
          />
        </S.InputFieldWrapper>
        <S.InputFieldWrapper>
          <label>Pick year</label>
          <PickDate
            register={register}
            fieldName="year"
            maximumDate={formState.year}
            difference={95}
          />
        </S.InputFieldWrapper>
      </S.DataPicker>
      <S.SubmitButton>Submit Form</S.SubmitButton>
      <S.Output>Result is {formState.payment}</S.Output>
    </S.Wrapper>
  );
};
