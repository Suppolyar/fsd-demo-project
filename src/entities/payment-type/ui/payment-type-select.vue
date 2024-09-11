<script setup lang="ts">
import { IPaymentType } from "../types";

defineOptions({
  name: "PaymentTypeSelect",
});

const props = defineProps<{
  options: IPaymentType[];
}>();

const selectedPaymentType = defineModel();
</script>

<template>
  <div>
    <select
      v-model="selectedPaymentType"
      class="rounded border border-gray-700 p-1"
    >
      <option v-for="paymentType in props.options" :key="paymentType.id">
        {{ paymentType.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
