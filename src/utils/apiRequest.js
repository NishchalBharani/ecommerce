import { API_URL_ROOT, ACCESS_TOKEN } from "./constants";
import axios from 'axios';
import * as Cookie from "./Cookie"

export async function post(path, postData) {
    let config = {
        headers: {
            Authorization: "Bearer " + Cookie.getCookie("accessToken")
        }
    };
    const url = `${API_URL_ROOT}/${path}`;

    try {
        const response = await axios.post(url, postData, config);
        console.log("API Response:", response); // Log the entire response object
        return response.data;
    } catch (error) {
        console.error("API Request Error:", error.message); // Log the specific error message
        throw error;
    }
}

export async function get(path) {
    if (Cookie.getCookie(ACCESS_TOKEN)) {
        let config = {
            headers: {
                "Cache-Control": "no-cache",
                Authorization: "Bearer " + Cookie.getCookie("accessToken")
            }
        }
        const url = `${API_URL_ROOT}/${path}`
        return await axios.get(url, config)
    } else {
        const url = `${API_URL_ROOT}/${path}`
        return await axios.get(url)
    }
}

