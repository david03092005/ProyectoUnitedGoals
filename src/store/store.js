import { configureStore } from "@reduxjs/toolkit";
import navigatorBarReducer from './navigatorBarSlice'


export default configureStore({
    reducer: {
        navigatorBar: navigatorBarReducer
    }
})