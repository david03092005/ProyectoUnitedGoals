import { Link } from 'react-router-dom';
import styles from './Equipo.module.css'

function Equipo() {
    return(
        <div className = {styles.Route}>
            <div>
                <h1>Equipo 1</h1>
                <p>
                    Lorem ipsum
                </p>
                <Link to = '/Jugador'>
                    <img src="default.jpg" className = {styles.ImagenJugadores} alt="Imagen del creador"/>
                </Link>
            </div>
            <div className={styles.ContenedorMayorInfo}>
                <div className={styles.ContenedorInfoEquipo}>
                    <h3 className={styles.TituloInfoEquipo}>Información sobre el equipo</h3>
                    <p className={styles.ParrafoInfoEquipo}>
                        Culpa ea aliqua ipsum occaecat sit anim ullamco consequat cupidatat. 
                        Consectetur anim incididunt adipisicing est ipsum eiusmod aliqua nostrud labore est velit. 
                        Pariatur ipsum nisi ex minim nulla qui occaecat incididunt ut proident. 
                        Mollit anim adipisicing sint enim do excepteur sit ea est. 
                        Aliquip cupidatat sunt veniam consequat duis. 
                        Culpa dolor duis labore labore excepteur est eu commodo ipsum. 
                        Aliquip reprehenderit sit ex culpa ea elit eiusmod ad ullamco nisi incididunt.
                    </p>
                </div>
                <img src="default.jpg" className = {styles.ImagenJugadoresInfo} alt="Imagen del creador"/>
            </div>
        </div>
    );
}

export default Equipo;