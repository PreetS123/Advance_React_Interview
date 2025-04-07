import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSllice';
import counterReducer from './counterSlice';
import userReducer from "./userSlice";
import formReducer from "./formSlice";

export const store = configureStore({
    reducer:{
        todos:todoReducer,
        counter:counterReducer,
        users: userReducer,
        form:formReducer,
    }
})


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;