import React from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickDate } from './CalculatePayment/components/PickDate';

export const CalculatePayment = () => {
  return (
    <form>
      <Payment></Payment>
      <WorkingHours></WorkingHours>
      <PickDate maximumDate={12} difference={11}></PickDate>
      <PickDate maximumDate={2023} difference={95}></PickDate>
    </form>
  );
};
