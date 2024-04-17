<template>
  <div className="hero min-h-[92%]  bg-base-200" @keydown.enter="loginHandler">
    <div className="hero-content flex-col ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              :className="errorMsg"
              v-model="email"
              required
              @click="setDefault"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              :className="errorMsg"
              v-model="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="button" className="btn btn-primary" @click="loginHandler">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../services/authService";
import { authStore } from "../stores/auth";

const auth = authStore()

const email = ref("")
const password = ref("")
const errorMsg = ref("input input-bordered")
const router = useRouter()

const setDefault = () => {
  errorMsg.value = "input input-bordered";
}

const loginHandler = async () => {
  try {
    const response = await login({ email:email.value, password: password.value });
    localStorage.setItem("token", response.token);
    auth.storeToken(response.token)
    router.push('/home')
  } catch (error) {
    errorMsg.value = "input input-bordered input-error";
    console.log(error)
  }
};

</script>

<style lang="scss" scoped></style>
