import {Link} from 'react-router-dom';
import styles from "./Navigator.module.css";
import { useState } from 'react';

function Navigator(){
    const [ home, setHome ] = useState(true)
    const [ acerca, setAcerca ] = useState(false)
    const [ equipos, setEquipos ] = useState(false)
    const [ eventos, setEventos ] = useState(false)

    const onHome = () => {
        setHome(true);
        setAcerca(false);
        setEquipos(false);
        setEventos(false);
    }
    const onAcerca = () => {
        console.log('cualquier')
        setHome(false);
        setAcerca(true);
        setEquipos(false);
        setEventos(false);
    }
    const onEquipos = () => {
        setHome(false);
        setAcerca(false);
        setEquipos(true);
        setEventos(false);
    }
    const onEventos = () => {
        setHome(false);
        setAcerca(false);
        setEquipos(false);
        setEventos(true);
    }

    return(
        <div className = {styles.contenedorNavigator}>
            <nav className = {styles.navigator}>
                <Link to = '/' className = {`${styles.links} ${home === true ? styles.square: null}`} onClick={onHome}>
                    Inicio
                </Link>
                <Link to = '/Acerca' className = {`${styles.links} ${acerca === true ? styles.square : null}`} onClick={onAcerca}>
                    Acerca
                </Link>
                <Link to = '/equipos' className = {`${styles.links} ${equipos === true ? styles.square : null}`} onClick={onEquipos}>
                    Equipos
                </Link>
                <Link to = '/eventos' className = {`${styles.links} ${eventos === true ? styles.square : null}`} onClick={onEventos}>    
                    Eventos
                </Link>
                <Link className = {styles.search}>
                    Buscar
                </Link>
            </nav>
        </div>
    );
}

export default Navigator;