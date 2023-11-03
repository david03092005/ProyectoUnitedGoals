import { configureStore } from "@reduxjs/toolkit";
import navigatorBarSlice from "./navigatorBarSlice";
import equiposInfoSlice from "./equiposInfoSlice";
import modalSlice from "./modalSlice";
import inicioSesionSlice from "./InicioSesionSlice";


export default configureStore({
    reducer: {
        navigatorBar: navigatorBarSlice,
        equiposInfo: equiposInfoSlice,
        verModal: modalSlice,
        inicioSesion: inicioSesionSlice 
    }
})