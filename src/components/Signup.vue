<template>
    <div className="hero min-h-[92%] bg-base-200">
    <div className="hero-content flex-col w-full">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
            <div className="form-control">
            <label className="label">
              <span className="label-text">Firstname</span>
            </label>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered"
              required
              v-model="firstname"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Lastname</span>
            </label>
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered"
              required
              v-model="lastname"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered"
              required
              v-model="username"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              v-model="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              v-model="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="button" @click="sigUpHandler" className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signUp } from "../services/authService";
import { authStore } from "../stores/auth";

const auth = authStore()

const email = ref("")
const password = ref("")
const firstname = ref("")
const lastname = ref("")
const username = ref("")
const router = useRouter()

const sigUpHandler = async () => {
  try {
    const response = await signUp({ email:email.value, username:username.value, name: {firstname:firstname.value,lastname:lastname.value}, password: password.value });
    localStorage.setItem("token", response.token);
    auth.storeToken(response.token)
    router.push('/home')
  } catch (error) {
    console.log(error)
  }
};

</script>

<style lang="scss" scoped>

</style>