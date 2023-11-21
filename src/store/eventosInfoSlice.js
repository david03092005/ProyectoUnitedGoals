import { createSlice } from "@reduxjs/toolkit";

export const eventoInfoSlice = createSlice({
    name: "Informaciondeloseventos",
    initialState: {
        eventoInfo: null
    },
    reducers: {
        cargarEvento: (estado, accion) => {
            estado.eventoInfo = accion.payload;
        }
    }
});

export const { cargarEvento } = eventoInfoSlice.actions;

export default eventoInfoSlice.reducer;