import styles from './Modal.module.css'

function Modal({cerrar}){
    return(
        <div className={styles.contenedorModal}>
            <div className={styles.VentanaModal}>
                <button onClick={() => { cerrar(); }}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Modal;