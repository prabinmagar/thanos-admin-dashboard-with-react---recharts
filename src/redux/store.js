import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
    reducer: combineReducers({
        sidebar: sidebarReducer
    })
});

export default store;