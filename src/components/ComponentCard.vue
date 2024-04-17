<template>
  <div
    class="w-64 h-96 shadow-xl shadow-black rounded-md p-4 flex flex-col gap-4 hover:scale-105"
  >
    <div
      class="flex flex-col gap-4 h-[90%]"
      @click="$router.push(`/products/${product.id}`)"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="h-[60%] styledImage"
      />
      <h1 class="text-white truncate">{{ product.title }}</h1>
      <p class="truncate">{{ product.description }}</p>
      <div class="flex flex-row justify-between">
        <p>{{ product.category.toUpperCase() }}</p>
        <p class="text-white">{{ product.price }} €</p>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <input
        type="number"
        default="0"
        min="0"
        class="bg-gray-900 text-white w-1/3 rounded-md pl-2"
        v-model="quantity"
      />
      <button
        type="button"
        class="self-end hover:bg-slate-600 rounded-full"
        @click="addToCart(product, quantity)"
      >
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
    <Teleport to="body">
      <div v-if="toast" className="toast toast-end">
        <div :className="toastType">
          <span>{{
            toast ? "Product successfully added" : "An error ocurred"
          }}</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { cartStore } from "../stores/cart";

const myCart = cartStore();
const quantity = ref(0);
const toast = ref(false);
const toastType = ref("alert alert-success");

const addToCart = (product, quantity) => {
  try {
    myCart.setCart(product, quantity);
    toastType.value = "alert alert-success";
  } catch (error) {
    toastType.value = "alert alert-error";
  }
  toast.value = true;

  setTimeout(() => {
    toast.value = false;
  }, 3000);
};

const props = defineProps({
  product: Object,
});
</script>

<style scoped>
.styledImage {
  object-fit: cover;
}
</style>
