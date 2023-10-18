import { Link } from 'react-router-dom';
import styles from './Equipo.module.css';
import { useSelector } from 'react-redux';


function Equipo() {
    const { equipoInfo } = useSelector((estado) => estado.equiposInfo);
    console.log(equipoInfo)
    return(
        <div className = {styles.Route}>
            {equipoInfo &&
                <>
                    <div>
                        <h1>{equipoInfo.name}</h1>
                        <p>
                            {equipoInfo.eslogan}
                        </p>
                        <Link to = '/Jugador'>
                            <img src={equipoInfo.img} className = {styles.ImagenJugadores} alt="Imagen del creador"/>
                        </Link>
                    </div>
                    <div className={styles.ContenedorMayorInfo}>
                        <div className={styles.ContenedorInfoEquipo}>
                            <h3 className={styles.TituloInfoEquipo}>Información sobre el {equipoInfo.name}</h3>
                            <p className={styles.ParrafoInfoEquipo}>
                                {equipoInfo.descripcion}
                            </p>
                        </div>
                        <img src={equipoInfo.imgRepresentativa} className = {styles.ImagenJugadoresInfo} alt="Imagen del creador"/>
                    </div>
                </>
            }
        </div>
    );
}

export default Equipo;