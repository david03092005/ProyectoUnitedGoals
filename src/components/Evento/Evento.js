import styles from './Evento.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cargarEvento } from '../../store/eventosInfoSlice';


function Evento({evento}) {
    const dispatch = useDispatch();

    return(
        <Link to="/EventoInfo" className={styles.linksE} onClick={() => (dispatch(cargarEvento(evento)))}>
            <div className={styles.contenedorEvento}>
                <h2>
                    {evento.equipos}
                </h2>
                {/* <img src="mundial.jpg" className = {styles.imagenEvento} alt="Imagen evento"/> */}
            </div>
        </Link>
    )
}

export default Evento;