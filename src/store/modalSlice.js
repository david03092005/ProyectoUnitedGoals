import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "estadoModal",
    initialState: {
        estadoModalI: false,
        estadoModalR: false,
        estadoModalN: false
    },
    reducers: {
        cambiarModalI: (estado) => {
            estado.estadoModalI = !(estado.estadoModalI);
        },
        cambiarModalR: (estado) => {
            estado.estadoModalR = !(estado.estadoModalR);
        },
        cambiarModalN: (estado) => {
            estado.estadoModalN = !(estado.estadoModalN);
        }
    }
})


export const { cambiarModalI, cambiarModalR, cambiarModalN } = modalSlice.actions;

export default modalSlice.reducer;