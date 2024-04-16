import axios from "axios";
import { defineComponent } from "vue";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export default api