import React, { useState } from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickDate } from './CalculatePayment/components/PickDate';
import * as S from './styled';
import { useGetWorkingDays } from './CalculatePayment/hooks/useGetWorkingDays';
import { useForm } from 'react-hook-form';

export const CalculatePayment = () => {
  const [hourPayment, setHourPayment] = useState('');
  const [state, setState] = useState({
    month: 10,
    year: 2021,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hours: 8,
      payment: '',
      ...state,
    },
  });

  const SubmitHandler = async (data: any) => {
    setState({ month: Number(data.month), year: Number(data.year) });
    const workingDays = await useGetWorkingDays(state);
    const paymentPerHours =
      Math.round(Number(data.payment) / (workingDays * data.hours)) / 10;
    setHourPayment(paymentPerHours.toString());
  };

  return (
    <S.Wrapper onSubmit={handleSubmit((data) => SubmitHandler(data))}>
      <S.InputFieldWrapper>
        <label>Input payment</label>
        <Payment
          register={register}
          fieldName="payment"
          error={errors.payment ? true : false}
        />
      </S.InputFieldWrapper>
      {errors.payment && <S.Error>{errors.payment?.message}</S.Error>}
      <S.InputFieldWrapper>
        <label>Input hours</label>
        <WorkingHours register={register} fieldName="hours" />
      </S.InputFieldWrapper>
      <S.DataPicker>
        <S.InputFieldWrapper>
          <label>Pick month</label>
          <PickDate
            register={register}
            fieldName="month"
            maximumDate={12}
            difference={11}
          />
        </S.InputFieldWrapper>
        <S.InputFieldWrapper>
          <label>Pick year</label>
          <PickDate
            register={register}
            fieldName="year"
            maximumDate={2023}
            difference={95}
          />
        </S.InputFieldWrapper>
      </S.DataPicker>
      <S.SubmitButton>Submit Form</S.SubmitButton>
      <S.Output>Result is {hourPayment}</S.Output>
    </S.Wrapper>
  );
};
