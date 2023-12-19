import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "../reduxToolkit/customAPI";
console.log('Đã vào được userService');

export const login = createAsyncThunk(
    "user/login",
    async (user) => {
        try {
            const response = await customAPI.post(`login`, user);
            console.log('login trong userService: ', user);
            return response.data;
        }
        catch (err) {
            console.log('ERR trong login userService: ', err);
            throw err;
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",

    async (user) => {
        const response = await customAPI.post(`register`, user);
        return response.data;
    }
);

export const showAllUsers = createAsyncThunk(
    "admin/showAllUsers",
    async () => {
        const response = await customAPI.get("admin/list_users");
        return response.data;
    });





