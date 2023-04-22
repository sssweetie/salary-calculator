import React from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickDate } from './CalculatePayment/components/PickDate';
import * as S from './styled';

export const CalculatePayment = () => {
  return (
    <S.Wrapper>
      <Payment></Payment>
      <WorkingHours></WorkingHours>
      <S.DataPicker>
        <PickDate maximumDate={12} difference={11}></PickDate>
        <PickDate maximumDate={2023} difference={95}></PickDate>
      </S.DataPicker>
    </S.Wrapper>
  );
};
