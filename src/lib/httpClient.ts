import axios from "axios";

export const httpService = axios.create({
    baseURL: 'http://46.100.46.149:8069/api'
});

httpService.interceptors.response.use(response => response.data, error => Promise.reject(error));