import styles from './EventoInfo.module.css'
import { useSelector } from "react-redux/es/hooks/useSelector";

function EventoInfo() {
    const { eventoInfo } = useSelector((estado) => estado.eventosInfo);
    return (
        <div className={styles.route}>
            <h1>{eventoInfo.equipos}</h1>
            <img src={eventoInfo.img} alt="Imagen evento"/>
            <h3>Informacion Importante: </h3>
            <p>
                Lugar: {eventoInfo.lugar}
                <br/>
                Hora: {eventoInfo.hora}
                <br/>
                Motivo: {eventoInfo.motivo}
            </p>
        </div>
    );
}

export default EventoInfo;