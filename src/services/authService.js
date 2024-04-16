import {apiAuth} from "./config";

export const login = async (userData) => {
    try {
        console.log(userData)
        const { data } = await apiAuth.post('/login', userData);
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}

export const signUp = async (userData) => {
    const { data } = await apiAuth.post('/signup', userData);
    return data
}