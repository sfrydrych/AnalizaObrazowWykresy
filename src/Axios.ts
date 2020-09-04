import axios from "axios";

const baseURL = 'http://localhost:3091';

const Axios = axios.create({
    baseURL,
    timeout: 20000,
});

export { Axios };