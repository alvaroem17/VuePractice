<template>
    <div>
        <h1 class="text-5xl text-white font-extrabold text-center">Products</h1>
        <div>
            <div v-if="products" class="flex flex-row flex-wrap gap-12 p-12 justify-start">
                <ComponentCard v-for="product in products" :key="product.id" :product="product"/>
            </div>
            <div v-else>
                <h1>There's no products</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import ComponentCard from "../components/ComponentCard.vue"
import { onMounted,ref } from 'vue'
import { getAllProducts } from '../services/productService'

const products = ref([])

onMounted(async() => {
    try {
        products.value = await getAllProducts()
    } catch (error) {
        console.error(error)
    }
})

//console.log(products.value)

</script>

<style lang="scss" scoped>

</style>