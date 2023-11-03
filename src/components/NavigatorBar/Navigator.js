import {Link} from 'react-router-dom';
import styles from "./Navigator.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { inicioCambiar, acercaCambiar, equiposCambiar, eventosCambiar } from '../../store/navigatorBarSlice';
import { cambiarModalI, cambiarModalR } from '../../store/modalSlice';

function Navigator(){
    const { inicio } = useSelector((estado) => estado.navigatorBar);
    const { acerca } = useSelector((estado) => estado.navigatorBar);
    const { equipos } = useSelector((estado) => estado.navigatorBar);
    const { eventos } = useSelector((estado) => estado.navigatorBar);
    const dispatch = useDispatch();

    return(
        <div>
            <nav className = {styles.contenedorNavigator}>
                
                <Link to = '/' className = {styles.contenedorLogo} onClick={() => dispatch(inicioCambiar())}>
                    <img src="LogoPagInver.png" className = {styles.Logo} alt="LogoPag"/>
                </Link>
                <Link to = '/' className = {`${styles.links} ${inicio === true ? styles.square: null}`} onClick={() => dispatch(inicioCambiar())}>
                    Inicio
                </Link>
                <Link to = '/Acerca' className = {`${styles.links} ${acerca === true ? styles.square : null}`} onClick={() => dispatch(acercaCambiar())}>
                    Acerca
                </Link>
                <Link to = '/equipos' className = {`${styles.links} ${equipos === true ? styles.square : null}`} onClick={() => dispatch(equiposCambiar())}>
                    Equipos
                </Link>
                <Link to = '/eventos' className = {`${styles.links} ${eventos === true ? styles.square : null}`} onClick={() => dispatch(eventosCambiar())}>    
                    Eventos
                </Link>
                <div className={styles.contenedorIR}>
                    <Link className = {styles.inicioSesion} onClick={() => dispatch(cambiarModalI())}>
                        Iniciar sesion
                    </Link>
                    <Link className={styles.inicioSesion} onClick={() => dispatch(cambiarModalR())}>
                        Registrarse
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navigator;