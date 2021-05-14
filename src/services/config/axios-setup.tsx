import axios, { AxiosInstance } from "axios";

export const AXIOS_SERVICE: AxiosInstance = 
axios.create(
    {
        responseType: 'json'
    }
);

AXIOS_SERVICE.interceptors.request.use(
    async config => {
        config.baseURL = 'http://localhost:5051/empleados-service/';
        config.headers = { 
            'Accept': ' application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);