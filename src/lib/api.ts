import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL não está definida!");
}

export const API = axios.create({
    baseURL: API_URL+"/api",
    headers: {
        "Content-Type": "application/json",
    },
});
