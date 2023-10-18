import { configureStore } from "@reduxjs/toolkit";
import navigatorBarReducer from './navigatorBarSlice'
import equiposInfoSlice from "./equiposInfoSlice";


export default configureStore({
    reducer: {
        navigatorBar: navigatorBarReducer,
        equiposInfo: equiposInfoSlice
    }
})