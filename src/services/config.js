import axios from "axios";
import { defineComponent } from "vue";

export const apiStore = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export const apiAuth = axios.create({
    baseURL: 'https://authapi-i1aj.onrender.com/api/auth'
})