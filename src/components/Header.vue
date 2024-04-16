<template>
  <div
    class="bg-slate-950 flex px-20 justify-between items-center h-[8%] flex-row w-full text-blue-50 text-xl shadow-md shadow-slate-800"
  >
    <h1
      class="text-5xl font-bold text-blue-50 w-60 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
    >
      FakeStore
    </h1>
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
    <div class="flex flex-row gap-5 w-60 justify-center" v-if="!hasToken">
      <RouterLink to="/auth/login">
        <button
          class="rounded text-white py-2 hover:scale-105 hover:bg-slate-800 hover:shadow-md w-36"
        >
          Login
        </button>
      </RouterLink>
      <RouterLink to="/auth/signup">
        <button
          class="rounded text-white py-2 hover:scale-105 hover:bg-slate-800 hover:shadow-md shadow-[0_0_4px_rgba(0,0,0,0.5)] shadow-slate-300 w-36"
        >
          Sign up
        </button>
      </RouterLink>
    </div>
    <div class="flex flex-row gap-5 w-60 justify-center items-center" v-else>
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button"
          ><svg
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </label>
        <RouterLink to="/home">
        <button
          class="rounded text-white py-2 hover:scale-105 hover:bg-slate-800 hover:shadow-md shadow-[0_0_4px_rgba(0,0,0,0.5)] shadow-slate-300 w-36" @click="logOut()"
        >
          Log out
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { authStore } from "../stores/auth";
import { onMounted, onUpdated, ref, watch } from 'vue'

const auth = authStore()

const hasToken = ref(false)

onMounted (()=>{
  hasToken.value = auth.getToken ? true : false
})

onUpdated (()=>{
  hasToken.value = auth.getToken ? true : false
})

watch(() => auth.getToken, () => {
  hasToken.value = auth.getToken ? true : false
})

const logOut = () => {
  localStorage.removeItem("token")
  auth.logout()
}

</script>

<style scoped>
li:hover {
  scale: 1.1;
}
</style>
