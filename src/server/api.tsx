import axios from "axios";


export const Api = axios.create({
    baseURL: "http:/192.168.0.4:3000/"
})

