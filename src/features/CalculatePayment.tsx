import React from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickDate } from './CalculatePayment/components/PickDate';
import * as S from './styled';
import { useGetWorkingDays } from './CalculatePayment/hooks/useGetWorkingDays';
import { useForm } from 'react-hook-form';

export const CalculatePayment = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      hours: '',
      months: '',
      year: '',
      payment: '',
    },
  });

  const SubmitHandler = (data: any, event: any) => {
    console.log(data, event);
    const objData = {
      event: event,
      month: +data.months,
      year: +data.year,
    };

    const weekends = useGetWorkingDays(objData);
    console.log(weekends);
  };

  return (
    <S.Wrapper
      onSubmit={handleSubmit((data, event) => SubmitHandler(data, event))}
    >
      <label>Input payment</label>
      <Payment register={register} fieldName="payment"></Payment>
      <label>Input hours</label>
      <WorkingHours register={register} fieldName="hours"></WorkingHours>
      <S.DataPicker>
        <PickDate
          register={register}
          fieldName="months"
          maximumDate={12}
          difference={11}
        ></PickDate>
        <PickDate
          register={register}
          fieldName="year"
          maximumDate={2023}
          difference={95}
        ></PickDate>
      </S.DataPicker>
      <S.SubmitButton>Submit Form</S.SubmitButton>
    </S.Wrapper>
  );
};
