
const EstadoInicial = {
    showModal: false
};

const uiReducer = (estado = EstadoInicial, accion) => {
    switch(accion.type){
        case 'SET_MODAL':
            return {
                ...estado,
                showModal: accion.payload
            };
        default:
            return estado;
    }
};

export default uiReducer;