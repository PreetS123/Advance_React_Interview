import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// https://jsonplaceholder.typicode.com/users
interface User{
id:number;
name:string;
email:string;
}

interface UserState{
    users:User[];
    loading:boolean;
    error: string | null;
}

const initialState: UserState= {
users:[],
loading:false,
error:null,
}

export const fetchUsers= createAsyncThunk('users/fetchUser', async()=>{
    const response= await axios.get(' https://jsonplaceholder.typicode.com/users');
    return response.data;
});

const userSlice= createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.loading=true;
            state.error= null;
        })
         .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading= false;
            state.error= null;
            state.users= action.payload;
         })
         .addCase(fetchUsers.rejected,(state, action)=>{
            state.loading= false;
            state.error= action?.error?.message || "Something went worng"
         });
    },
});

export default userSlice.reducer;
