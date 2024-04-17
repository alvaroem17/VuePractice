<template>
  <Header />
  <div className="drawer drawer-end">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <CartItem v-for="elem in myCart.products" :key="elem.productId" :product="elem" :addTotal="addTotal" :total="total" />
        <h1 class="text-white text-xl font-bold">Total: {{ total }} €</h1>
      </ul>
    </div>
  </div>
  <router-view class="min-h-[84%] p-4"></router-view>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CartItem from '../components/CartItem.vue'
import { getMyCart } from "../services/productService";
import { onMounted, ref } from "vue";

const total = ref(0)

const myCart = ref([])
onMounted(async()=>{
  myCart.value = await getMyCart()
})

const addTotal = (newValue) => {
  total.value = newValue
}

</script>

<style lang="scss" scoped></style>
