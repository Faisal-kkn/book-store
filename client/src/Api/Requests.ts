import { apiService } from "../Axios/Axios";
import { Books } from "../Model/Book";

interface HttpGetResponse {
    totalItems: number;
    status: number;
    data: any; // You can replace 'any' with the actual type of the data returned by the API
    headers?: Record<string, string>;
}

export const getApi = (url: string): Promise<Books> => {
    return apiService.httpGetService(url) as Promise<HttpGetResponse>;
};
