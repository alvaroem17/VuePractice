<template>
    <div class="flex flex-row justify-center items-center gap-8">
        <img :src="product.image" :alt="product.title" class="h-96 w-96 object-contain rounded-md">
        <div class="w-80">
            <h1 class="text-white text-2xl">{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <div class="flex flex-row justify-between my-10">
                <p>{{ product.category }}</p>
                <p class="text-white">{{ product.price }} €</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ComponentCard from "../components/ComponentCard.vue"
import { onMounted,ref } from 'vue'
import { useRoute } from 'vue-router'
import { getOneProduct } from '../services/productService'

const route = useRoute()

const product = ref({})

onMounted(async()=>{
    product.value = await getOneProduct(route.params.id)
})
</script>

<style scoped>

</style>