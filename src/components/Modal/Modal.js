import styles from './Modal.module.css'
import { connect } from 'react-redux';
import { setModal } from '../../store/actions/ui';

function Modal({setModal}){
    return(
        <div className={styles.contenedorModal}>
            <div className={styles.VentanaModal}>
                <button onClick={() => {setModal(false)}}>
                    X
                </button>
            </div>
        </div>
    )
}

const mapActionsToProps = {
    setModal
}

export default connect(null, mapActionsToProps)(Modal);