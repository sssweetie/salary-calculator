export interface DateRange {
  maximumDate: number;
  difference: number;
  register: any;
  fieldName: string;
}

export interface Date {
  month: number;
  year: number;
  hours: number;
  payment: string;
}

export interface FormProps {
  register: any;
  fieldName: string;
}
