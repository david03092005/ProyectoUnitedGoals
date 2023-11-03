import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "estadoModal",
    initialState: {
        estadoModalI: false,
        estadoModalR: false
    },
    reducers: {
        cambiarModalI: (estado) => {
            // estado.estadoModalR = estado.estadoModalR;
            estado.estadoModalI = !(estado.estadoModalI);
        },
        cambiarModalR: (estado) => {
            estado.estadoModalR = !(estado.estadoModalR);
            // estado.estadoModalI = estado.estadoModalI;
        }
    }
})


export const { cambiarModalI, cambiarModalR } = modalSlice.actions;

export default modalSlice.reducer;