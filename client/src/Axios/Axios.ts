import axios, { AxiosResponse } from 'axios';

export const apiService = {
    httpGetService
};

interface DefaultOption {
    headers: {
        'Content-Type': string;
        // Add any other headers type
    };
}

async function httpGetService(url: string): Promise<any> {
    // We can set token in headers
    const defaultOption: DefaultOption = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios(`${process.env.REACT_APP_BACKEND_URL}${url}`, defaultOption);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }

}

function handleResponse(response: AxiosResponse): any {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        const error = new Error(`Request failed with status ${response.status}`);
        throw error;
    }
}

function handleError(error: unknown) {
    // Handle errors here (optional)
    throw error;
}
