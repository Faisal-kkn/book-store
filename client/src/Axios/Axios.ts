import axios, { AxiosInstance as Instance, AxiosRequestConfig } from "axios";

// Assuming you have defined the backend URL in the environment variables.
// Make sure to have the correct variable name defined in your ".env" file.
const baseURL: string = process.env.REACT_APP_BACKEND_URL || "";

const defaultHeaders: { [key: string]: string } = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

const defaultOptions: AxiosRequestConfig = {
    baseURL: baseURL,
    headers: defaultHeaders,
};

// Create user instance
const AxiosInstance: Instance = axios.create(defaultOptions);

// Set the AUTH token for any request
AxiosInstance.interceptors.request.use(
    function (config: any){
        // const token = localStorage.getItem("");
        // config.headers.accesstoken = token;
        return config;
    },
    function (error): Promise<never> {
        return Promise.reject(error);
    }
);

export default AxiosInstance;
