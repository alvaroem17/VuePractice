import {apiAuth} from "./config";

export const login = async (userData) => {
    try {
        const { data } = await apiAuth.post('/login', userData);
        return data
    } catch (error) {
        console.error(error);
    }
}

export const signUp = async (userData) => {
    try {
        const { data } = await apiAuth.post('/signup', userData);
        return data
    } catch (error) {
        console.error(error);
    }
}