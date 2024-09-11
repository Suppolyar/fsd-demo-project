import { IPaymentType } from "../types";

const MOCK_PAYMENT_DATA = [
  { id: 1, name: "Test", description: "Test description" },
  { id: 2, name: "Test 2", description: "Test 2 description" },
  { id: 3, name: "Test 3", description: "Test 3 description" },
];

export const usePaymentTypesApi = () => {
  const getPaymentTypes = (userId: number): IPaymentType[] => {
    console.log(`Получаем данные по id: ${userId}`);
    return MOCK_PAYMENT_DATA;
  };
  const updatePaymentType = () => {
    console.log("Обновляем данные");
  };
  const createPaymentType = () => {
    console.log("Создаем данные");
  };
  const deletePaymentType = () => {
    console.log("Удаляем данные");
  };
  return {
    getPaymentTypes,
    updatePaymentType,
    createPaymentType,
    deletePaymentType,
  };
};
