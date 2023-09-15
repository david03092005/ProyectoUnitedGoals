import styles from './Eventos.module.css'

function Eventos() {
    return (
        <div className = {styles.Route}>
            <h1> Eventos importantes </h1>
            <img src="Calendario.jpg" className = {styles.ImagenVideo} alt="Imagen calendario"/>
        </div>
    );
}

export default Eventos;