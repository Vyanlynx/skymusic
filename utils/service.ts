import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { getLocalStorage } from './webStorage';

const axiosInterceptorInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/', // API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        const accessToken = getLocalStorage('token');
        if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
            config.headers['x-corelationI-ID'] = uuidv4();
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;