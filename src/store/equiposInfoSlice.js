import { createSlice } from "@reduxjs/toolkit";

export const equiposInfoSlice = createSlice({
    name: "Informaciondelosequipos",
    initialState: {
        equipoInfo: null
    },
    reducers: {
        cargarEquipos: (estado, accion) => {
            estado.equipoInfo = accion.payload;
        }
    }
})


export const { cargarEquipos } = equiposInfoSlice.actions;

export default equiposInfoSlice.reducer;