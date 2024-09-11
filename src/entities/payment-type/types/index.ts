export interface IPaymentType {
  id: number;
  name: string;
  description: string;
}

export interface IPaymentTypeModelState {
  isLoading: boolean;
  paymentTypes: IPaymentType[];
  selectedPaymentType?: IPaymentType;
}
