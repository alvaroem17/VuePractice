<template>
    <div class="w-64 h-80 bg-slate-600 rounded-md p-4 flex flex-col gap-4 hover:scale-105" @click="$router.push(`/products/${product.id}`)">
        <img :src="product.image" :alt="product.title" class="w-full h-[60%] styledImage">
        <h1 class="text-white truncate">{{ product.title }}</h1>
        <p class="truncate">{{ product.description }}</p>
        <div class="flex flex-row justify-between">
            <p>{{ product.category.toUpperCase() }}</p>
            <p class="text-white">{{ product.price }} €</p>
        </div>
    </div>
</template>

<script setup>  
defineProps({
    product: Object
})
</script>

<style scoped>
.styledImage{
    object-fit: cover
}
</style>