import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/get", async() => {
    let response = await axios.get("http://localhost:3004/users");

    return response.data;
})

export const UserSlice = createSlice({
    name: 'users',
    initialState: {list: []},
    reducers: {

    },
    extraReducers: buider => {
        buider
        .addCase(getUsers.fulfilled, (state, action) => {
          state.list = action.payload
        })
    }
});

export const reducer = UserSlice.reducer
