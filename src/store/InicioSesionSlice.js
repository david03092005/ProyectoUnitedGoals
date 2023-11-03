import { createSlice } from "@reduxjs/toolkit";

export const inicioSesionSlice = createSlice({
    name: "inicioSesion",
    initialState: {
        sesion: false,
        informacion: null
    },
    reducers: {
        iniciarSesion: (estado, accion) => {
            estado.sesion = true;
            estado.informacion = accion.payload.user ;
            console.log(estado.informacion)
        }
    }
})

export const { iniciarSesion } = inicioSesionSlice.actions;

export default inicioSesionSlice.reducer;