import { reactive } from "vue";
import { usePaymentTypesApi } from "../api";
import { IPaymentTypeModelState } from "../types";

export const usePaymentTypeModel = () => {
  const state = reactive<IPaymentTypeModelState>({
    isLoading: false,
    paymentTypes: [],
  });

  const { getPaymentTypes } = usePaymentTypesApi();

  const setPaymentTypes = (userId: number) => {
    state.paymentTypes = getPaymentTypes(userId);
  };

  return {
    state,
    setPaymentTypes,
  };
};
