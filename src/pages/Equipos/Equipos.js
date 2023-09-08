import Container from "../../components/Container/Container";
import styles from './Equipos.module.css'
import { useState } from "react";

function Equipos() {
    const [posts] = useState([
    {
        id: 1,
        name: "Real madrid"
    }, 
    {
        id: 2,
        name: "Bayern múnich"
    },
    {
        id: 3,
        name: "Arsenal"
    }])

    return (
        <div className = "Equipos">
            <div className = {styles.Nose}>
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