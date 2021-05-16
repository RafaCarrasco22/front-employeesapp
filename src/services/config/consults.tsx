import { AXIOS_SERVICE } from "./axios-setup";
import { User } from "./UserInterface";


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
export const getEmployee = (id: string) => {
    return axiosInstance.get(
        `employees\?id=`+id
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

export const createUser = (user: User) => {
    return axiosInstance.post(`/employees`, user)
        .then(resp => resp)
        .catch(err => err);
}