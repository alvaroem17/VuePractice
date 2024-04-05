<template>
    <div class="bg-blue-300 flex px-20 justify-between items-center h-20 flex-row w-full text-blue-50 text-xl shadow-md shadow-slate-300">
        <h1 class="text-5xl font-bold text-blue-50 w-60 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">FakeStore</h1>
        <ul class="flex flex-row gap-6 w-60">
            <RouterLink to="/home">
                <li>Home</li>
            </RouterLink>
            <RouterLink to="/products">
                <li>Products</li>
            </RouterLink>
            <RouterLink to="/about">
                <li>About</li>
            </RouterLink>
        </ul>
        <div class="flex flex-row gap-5 w-60 justify-center">
            <RouterLink to="/auth/login">
                <button class="rounded text-white border border-blue-50 py-2 hover:scale-105 hover:bg-blue-600 hover:shadow-md w-36">Login</button>
            </RouterLink>
            <RouterLink to="/auth/signup">
                <button class="rounded text-white border border-blue-50 py-2 hover:scale-105 hover:bg-blue-600 hover:shadow-md w-36">Sign up</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
li:hover{
    scale: 1.1;
}
</style>