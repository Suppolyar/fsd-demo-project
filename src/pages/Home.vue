<script setup lang="ts">
import { deletePaymentType } from "@features/delete-payment-type";
import {
  PaymentTypeCard,
  PaymentTypeSelect,
  usePaymentTypeModel,
} from "@entities/payment-type";

const { state, setPaymentTypes } = usePaymentTypeModel();

const MOCK_USER_ID = 1;

const initPage = () => {
  /*
      Так же добавляем тут
        - логику загрузки
        - логику обработки ошибок
        - любую другую логику при инициализации страницы
   */
  setPaymentTypes(MOCK_USER_ID);
};
initPage();
</script>

<template>
  <div>
    <PaymentTypeSelect
      v-model="state.selectedPaymentType"
      :options="state.paymentTypes"
      class="mb-4"
    />
    <div class="grid grid-cols-3 gap-4">
      <PaymentTypeCard
        v-for="paymentType in state.paymentTypes"
        :key="paymentType.id"
        :payment-type="paymentType"
      >
        <template #action>
          <div @click="deletePaymentType(paymentType.id)">DELETE</div>
        </template>
      </PaymentTypeCard>
    </div>
  </div>
</template>

<style scoped></style>
