import axios from "axios";


export const Api = axios.create({
    baseURL: "http:/10.0.92.192:3000/"
})

