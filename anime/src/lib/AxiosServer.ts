import axios from "axios";
const MAL_CLIENT_ID = process.env.MAL_CLIENT_ID as string;
const MAL_BASE_URL = process.env.MAL_BASE_URL as string;
export const Axios_MAL = axios.create({
    baseURL: MAL_BASE_URL,
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
    },
    timeout: 5000,
});
