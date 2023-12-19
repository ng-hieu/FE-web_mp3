import { createSlice } from "@reduxjs/toolkit";
import { login } from "../service/userService";
console.log('Đã vào được userSlice');

const initialState = {
    currenState: JSON.parse(localStorage.getItem("user")),
    current: {},
    listUsers: []
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'idle';
                state.info = action.payload.info;
                state.token = action.payload.token;
                localStorage.setItem("user", JSON.stringify(action.payload))
            })
            .addCase(login.rejected, (state) => {
                console.log("error in login")
                state.status = 'idle';
            })
    }
})
export const selectUser = (state) => state.user;
export const selectUserInfo = (state) => state.user.info;

const userReducer = userSlice.reducer
export default userReducer;