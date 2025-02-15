import { getData } from "../utils/workWithLocalStorage";

const BASE_URL = 'http://localhost:3000';

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-type'] = 'Application/json';
        options.body = JSON.stringify(data);
    }

    const authData = getData('auth');
    if (authData && authData.accessToken) {
        options.headers['P-Authorization'] = authData.accessToken;
    }

    try {
        const response = await fetch(BASE_URL + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
        
    } catch (err) {
        throw new Error(err.message);
    }

}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
};