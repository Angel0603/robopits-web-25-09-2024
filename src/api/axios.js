import axios from "axios";

export const instance = axios.create({
    baseURL:'https://backend-robo.vercel.app/api',
    withCredentials: true
})
