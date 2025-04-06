import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSllice';
import counterReducer from './counterSlice';
import userReducer from "./userSlice";

export const store = configureStore({
    reducer:{
        todos:todoReducer,
        counter:counterReducer,
        users: userReducer,
    }
})


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;