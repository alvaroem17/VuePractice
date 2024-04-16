import {apiStore} from "./config";

export const getAllProducts = async () => {
    try {
        const { data } = await apiStore.get('products');
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getOneProduct = async (id) => {
    try{
        const { data } = await apiStore.get(`products/${id}`);
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getMyCart = async (id) => {
    try{
        //const { data } = await apiStore.get(`carts/${id}`);
        const { data } = await apiStore.get(`carts/1`);
        return data
    } catch (error) {
        console.error(error)
    }
}