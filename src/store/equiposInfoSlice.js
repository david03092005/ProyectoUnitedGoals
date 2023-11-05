import { createSlice } from "@reduxjs/toolkit";

export const equiposInfoSlice = createSlice({
    name: "Informaciondelosequipos",
    initialState: {
        equipoInfo: null,
        numEquipos: 0
    },
    reducers: {
        cargarEquipos: (estado, accion) => {
            estado.equipoInfo = accion.payload;
        },
        cargarNumEquipos: (estado, accion) => {
            estado.numEquipos = accion.payload;
        },
        sumarEquipo: (estado) => {
            estado.numEquipos++;
        }
    }
});


export const { cargarEquipos, cargarNumEquipos, sumarEquipo } = equiposInfoSlice.actions;

export default equiposInfoSlice.reducer;