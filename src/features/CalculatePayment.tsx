import React from 'react';
import { Payment } from './CalculatePayment/components/Payment';
import { WorkingHours } from './CalculatePayment/components/WorkingHours';
import { PickMonth } from './CalculatePayment/components/PickMonth';
import { PickYear } from './CalculatePayment/components/PickYear';

export const CalculatePayment = () => {
  return (
    <form>
      <Payment></Payment>
      <WorkingHours></WorkingHours>
      <PickMonth></PickMonth>
      <PickYear></PickYear>
    </form>
  );
};
