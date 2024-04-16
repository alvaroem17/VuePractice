import {apiStore} from "./config";

export const getAllProducts = async () => {
    const { data } = await apiStore.get('products');
    return data
}

export const getOneProduct = async (id) => {
    const { data } = await apiStore.get(`products/${id}`);
    return data
}