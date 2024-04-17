<template>
  <div class="h-2/3">
    <router-link to="/products">
        <button type="button" class="rounded-full p-2 hover:bg-slate-600">
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
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
        </svg>
        </button>

    </router-link>
    <div
      v-if="product.id !== undefined"
      class="flex flex-row justify-center items-center gap-8 h-full"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="h-96 w-96 object-contain rounded-md"
      />
      <div class="w-80">
        <h1 class="text-white text-2xl">{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <div class="flex flex-row justify-between my-10">
          <p>{{ product.category }}</p>
          <p class="text-white">{{ product.price }} €</p>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-row justify-center items-center gap-8 h-full">
      <div className="skeleton h-96 w-96"></div>
      <div class="w-80 flex flex-col gap-5">
        <div className="skeleton h-8 w-[100%]"></div>
        <div className="skeleton h-4 w-[100%]"></div>
        <div className="skeleton h-4 w-[100%]"></div>
        <div className="skeleton h-4 w-[100%]"></div>
        <div class="flex flex-row justify-between my-10">
          <div className="skeleton h-4 w-[100%]"></div>
          <div className="skeleton h-4 w-[100%]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentCard from "../components/ComponentCard.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getOneProduct } from "../services/productService";

const route = useRoute();

const product = ref({});

onMounted(async () => {
  product.value = await getOneProduct(route.params.id);
});
</script>

<style scoped></style>
