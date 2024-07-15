import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/get", async() => {
    let response = await axios.get("http://localhost:3004/users");
    return response.data;
});

export const addUser = createAsyncThunk("users/add", async(user) => {
    let response = await axios.post("http://localhost:3004/users", user);
    return response.data;
});

export const updateUser = createAsyncThunk("users/update", async(user) => {
    let response = await axios.put(`http://localhost:3004/users/${user.id}`, user);
    return response.data;
});

export const deleteUsers = createAsyncThunk("users/delete", async(user) => {
    await axios.delete(`http://localhost:3004/users/${user}`);
    return user; 
});

export const UserSlice = createSlice({
    name: 'users',
    initialState: { list: [] },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const index = state.list.findIndex(user => user.id === action.payload.id);
            state.list[index] = action.payload;
        })
        .addCase(deleteUsers.fulfilled, (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload.id);
        });
    }
});

export const reducer = UserSlice.reducer;