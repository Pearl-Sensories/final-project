import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

export const apiClient = axios.create({
    baseURL : baseURL,
});

apiClient.interceptors.request.use((config)=>{
    // grabing token (key) from local storage
    const token = localStorage.getItem('token');
    // attach token to authorization header
    config.headers.Authorization = `Bearer ${token}`;
    // return config
    return config;
});