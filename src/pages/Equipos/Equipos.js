import Container from "../../components/Container/Container";
import styles from './Equipos.module.css';
import { useState } from "react";

function Equipos() {
    const [posts] = useState([
    {
        id: 1,
        name: "Real madrid, el rey de europa"
    }, 
    {
        id: 2,
        name: "Bayern múnich"
    },
    {
        id: 3,
        name: "Arsenal"
    },
    {
        id:4,
        name: "Liverpool"
    },
    {
        id:5 ,
        name:"Manchester United"
    }])

    return (
        <div className = {styles.Route}>
            <h1>Equipos</h1>
            <div className = {styles.ContenedorEquipo}>
                    {posts.map((p, i) => (
                        <Container
                            key = {p.id}
                            name = {p.name}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Equipos;