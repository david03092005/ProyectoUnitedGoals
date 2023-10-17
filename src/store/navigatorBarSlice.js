import { createSlice } from "@reduxjs/toolkit";

export const navigatorBarSlice = createSlice({
    name: 'navigatorColor',
    initialState: {
        inicio: true,
        acerca: false,
        equipos: false,
        eventos: false
    },
    reducers: {
        inicioCambiar: (estado) => {
            estado.inicio = true;
            estado.acerca = false;
            estado.equipos = false;
            estado.eventos = false;
        },
        acercaCambiar: (estado) => {
            estado.inicio = false;
            estado.acerca = true;
            estado.equipos = false;
            estado.eventos = false;
        },
        equiposCambiar: (estado) => {
            estado.inicio = false;
            estado.acerca = false;
            estado.equipos = true;
            estado.eventos = false;
        },
        eventosCambiar: (estado) => {
            estado.inicio = false;
            estado.acerca = false;
            estado.equipos = false;
            estado.eventos = true;
        }
    }
})


export const { inicioCambiar, acercaCambiar, equiposCambiar, eventosCambiar } = navigatorBarSlice.actions;

export default navigatorBarSlice.reducer;