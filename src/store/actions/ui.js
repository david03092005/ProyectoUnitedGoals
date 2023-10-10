
export const setModal = (show) => (dispatch) => {
    dispatch({
        type: 'SET_MODAL',
        payload: show,
    });
}