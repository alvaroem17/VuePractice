<template>
  <div class="rounded-md p-2 hover:text-white flex flex-row">
    <div class="w-[20%]">
        <input type="number" v-model="props.product.quantity" class="w-[80%] bg-gray-900" min="0">
    </div>
    <div class="w-[80%]">
      <p>{{ productCart.title }}</p>
      <div class="flex flex-row justify-between items-center">
        <p class="text-gray-200">{{ productCart.price }} €</p>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
    <div class="divider"></div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  total: Number,
  addTotal: Function
});
import { onMounted, ref } from "vue";
import { getOneProduct } from "../services/productService";

const productCart = ref({});

onMounted(async () => {
  productCart.value = await getOneProduct(props.product.productId);
  props.addTotal(props.total + productCart.value.price * props.product.quantity);
});
</script>

<style lang="scss" scoped></style>
