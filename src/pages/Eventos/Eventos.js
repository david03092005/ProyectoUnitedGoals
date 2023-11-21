import styles from './Eventos.module.css'
import Evento from '../../components/Evento/Evento';
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";

function Eventos() {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const dataBase = getDatabase();
        const starCountRef = ref(dataBase, 'Eventos/');
        get(starCountRef).then((snapshot) => {
            const data = snapshot.val();
            setEventos(data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className = {styles.Route}>
            <h1> Eventos importantes </h1>
            {eventos.map((evento) => (
                <Evento
                    key = {evento.id}
                    evento = {evento}
                />
            ))}
        </div>
    );
}

export default Eventos;