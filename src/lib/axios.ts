import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL;


export const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})

api.defaults.withCredentials = true

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  
    return config
  }, (error) => {
    return Promise.reject(error)
  })