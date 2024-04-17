<template>
  <div>
    <h1 class="text-5xl text-white font-extrabold text-center">Products</h1>
    <div class="divider w-1/2 mx-auto"></div>
    <div>
      <div v-if="products.length === 0" class="flex flex-row flex-wrap gap-12 p-12 justify-start">
        <div className="skeleton w-64 h-96" v-for="n in 16" :key="n"></div>
      </div>
      <div
        class="flex flex-row flex-wrap gap-12 p-12 justify-start"
        v-else
      >
        <ComponentCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentCard from "../components/ComponentCard.vue";
import { onMounted, ref } from "vue";
import { getAllProducts } from "../services/productService";

const products = ref([]);

onMounted(async () => {
  try {
    products.value = await getAllProducts();
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
