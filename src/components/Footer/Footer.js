import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useDispatch } from 'react-redux';
import { inicioCambiar, acercaCambiar, equiposCambiar, eventosCambiar } from '../../store/navigatorBarSlice';

function Footer() {

    const dispatch = useDispatch();
    
    return(
        <div className={styles.ContenedorFooter}>
            <Link to = '/' onClick={() => dispatch(inicioCambiar())}>
                <img src="default.jpg" className = {styles.LogoFooter} alt="LogoFooter"/>
            </Link>
            <footer className={styles.Footer}>
            <Link to = '/'  className={styles.links} onClick={() => dispatch(inicioCambiar())}>
                <h6>Inicio</h6>
            </Link>
            <Link to = '/acerca'  className={styles.links} onClick={() => dispatch(acercaCambiar())}>
                <h6>Acerca</h6>
            </Link>
            <Link to = '/equipos'  className={styles.links} onClick={() => dispatch(equiposCambiar())}>
                <h6>Equipos</h6>
            </Link>
            <Link to = '/eventos'  className={styles.links} onClick={() => dispatch(eventosCambiar())}>
                <h6>Eventos</h6>
            </Link>
            <Link to = '/error404'  className={styles.links}>
                <h6>Redes sociales</h6>
            </Link>
            </footer>
            <footer className={styles.Footer}>
                <h6>Inicio</h6>
                <h6>Acerca</h6>
                <h6>Equipos</h6>
                <h6>Eventos</h6>
                <h6>Redes sociales</h6>
            </footer>
        </div>
    );
}

export default Footer;