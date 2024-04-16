import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const authStore = defineStore(
  "auth",
  () => {
    const setToken = localStorage.getItem("token");
    const token = ref(setToken);

    const storeToken = (value) => {
      token.value  = value
    }

    const user = localStorage.getItem("user");
    const userId = ref(user);

    const getToken = computed(() => {
      return token.value;
    });

    const getUser = computed(() => {
      return userId.value;
    });

    const logout = () => {
      token.value = "";
      userId.value = "";
    };
    return { getToken, getUser, logout, storeToken };
  },
  { persist: true }
);
