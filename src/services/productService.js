import api from "./config";

export const getAllProducts = async () => {
    const { data } = await api.get('products');
    return data
}

export const getOneProduct = async (id) => {
    const { data } = await api.get(`products/${id}`);
    return data
}