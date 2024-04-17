import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const cartStore = defineStore("cart", () => {
  const cart = ref([]);
  const setCart = (newProduct,quantity) => {
    const idx = cart.value.findIndex((product) => product.id === newProduct.id);
    if (idx !== -1) {
      cart.value[idx].quantity += quantity 
    } else {
      cart.value.push({...newProduct, quantity});
    }
  };
  //   const getCart = computed(() => {
  //     return cart;
  //   });

  //   const removeFromCart = (newProduct) => {
  //     cart.forEach((product) => {
  //       if (product.id === newProduct.id && product.quantity > 0) {
  //         product.quantity -= newProduct.quantity;
  //       } else if (product.id === newProduct.id && product.quantity === 0) {
  //         cart.splice(product.id, 1);
  //       }
  //     });
  // };

  return { setCart };
});
