import { get, post } from "./api";

const END_POINT = '/users';

async function register(email, username, password) {
    return await post(END_POINT + '/register', { email, username, password });
}

async function login(email, password) {
    return await post(END_POINT + '/login', {email, password})
}

async function logout() {
    return await get(END_POINT + '/logout');
}

export { register, login, logout };