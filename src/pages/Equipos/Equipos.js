import Container from "../../components/Container/Container";
import styles from './Equipos.module.css';
import { useState } from "react";


function Equipos() {
    const [posts] = useState([
        {
            id: 1,
            name: "Real madrid, el rey de europa",
            descripcion: 'El Real Madrid Club de Fútbol es un club polideportivo de la ciudad de Madrid, España. Fundado el 6 de marzo de 1902 como Sociedad Madrid Foot-Ball Club, en su rama futbolística - que juega en la Primera División de España - fue denominado por la FIFA el Mejor Club del Siglo XX.',
            img: 'imagenes/RealMadridPrincipal.jpg',
            escudo: 'EscudoRealMadril.png',
            imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
            eslogan: '¡Hala madrid! y nada mas.',
        }, 
        {
            id: 2,
            name: "Bayern múnich",
            descripcion: '',
            img: 'imagenes/BayernMunichPrincipal.jpg',
            escudo: 'EscudoBayern.png',
            imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
            eslogan: '¡Hala madrid! y nada mas.',
        },
        {
            id: 3,
            name: "Arsenal",
            descripcion: '',
            img: 'imagenes/ArsenalPrincipal.jpg',
            escudo: 'EscudoArsenal.png',
            imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
            eslogan: '¡Hala madrid! y nada mas.',
        },
        {
            id:4,
            name: "Liverpool",
            descripcion: '',
            img: 'imagenes/LiverpoolPrincipal.jpg',
            escudo: 'EscudoLiverpool.png',
            imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
            eslogan: '¡Hala madrid! y nada mas.',
        },
        {
            id:5 ,
            name:"Manchester United",
            descripcion: '',
            img: 'imagenes/ManchesterUnitedPrincipal.jpg',
            escudo: 'EscudoManchester.png',
            imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
            eslogan: '¡Hala madrid! y nada mas.',
        }
    ])

    return (
        <div className = {styles.Route}>
            <h1>Equipos</h1>
            <div className = {styles.ContenedorEquipo}>
                    {posts.map((p, i) => (
                        <Container
                            key = {p.id}
                            equipo = {p}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Equipos;