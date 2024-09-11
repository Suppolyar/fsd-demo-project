<script setup lang="ts">
import { IPaymentType } from "../types";

defineOptions({
  name: "PaymentTypeCard",
});

const props = defineProps<{
  paymentType: IPaymentType;
}>();
</script>

<template>
  <div class="rounded-xl border border-gray-700 p-4">
    <div class="mb-4 flex justify-between">
      <h3 class="text-blue-800">{{ props.paymentType.name }}</h3>
      <slot name="action"></slot>
    </div>
    <p>{{ props.paymentType.description }}</p>
  </div>
</template>

<style scoped></style>
