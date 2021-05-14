import { AXIOS_SERVICE } from "./axios-setup";


const axiosInstance = AXIOS_SERVICE;

export const getRegions = () => {
    return axiosInstance.get(
        `/regions/all`
    ).then(
        data => {
            return data;
        }
    ).catch(
        error => {
            return error;
        }
    )
}

export const getEmployees = () => {
    return axiosInstance.get(
        `/employees/all`
    ).then(
        data => {
            return data;
        }
    ).catch(
        error => {
            return error;
        }
    )
}