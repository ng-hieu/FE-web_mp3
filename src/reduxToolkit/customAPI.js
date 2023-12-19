import axios from "axios";

const customAPI = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : ""}`
    }
})
export default customAPI