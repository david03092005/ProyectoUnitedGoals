import Container from "../../components/Container/Container";
import styles from './Equipos.module.css';
import { cambiarModalN } from "../../store/modalSlice";
import { useDispatch } from "react-redux";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";
import { cargarNumEquipos } from "../../store/equiposInfoSlice";



function Equipos() {
    const dispatch = useDispatch();
     // const [equipos, setEquipos] = useState([
    //     {
    //         id: 1,
    //         name: "Real madrid, el rey de europa",
    //         descripcion: 'El Real Madrid Club de Fútbol es un club polideportivo de la ciudad de Madrid, España. Fundado el 6 de marzo de 1902 como Sociedad Madrid Foot-Ball Club, en su rama futbolística - que juega en la Primera División de España - fue denominado por la FIFA el Mejor Club del Siglo XX.',
    //         img: 'imagenes/RealMadridPrincipal.jpg',
    //         escudo: 'EscudoRealMadril.png',
    //         imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
    //         eslogan: '¡Hala madrid! y nada mas.',
    //     }, 
    //     {
    //         id: 2,
    //         name: "Bayern múnich",
    //         descripcion: '',
    //         img: 'imagenes/BayernMunichPrincipal.jpg',
    //         escudo: 'EscudoBayern.png',
    //         imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
    //         eslogan: 'Bayern múnich',
    //     },
    //     {
    //         id: 3,
    //         name: "Arsenal",
    //         descripcion: '',
    //         img: 'imagenes/ArsenalPrincipal.jpg',
    //         escudo: 'EscudoArsenal.png',
    //         imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
    //         eslogan: 'Arsenal',
    //     },
    //     {
    //         id:4,
    //         name: "Liverpool",
    //         descripcion: '',
    //         img: 'imagenes/LiverpoolPrincipal.jpg',
    //         escudo: 'EscudoLiverpool.png',
    //         imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
    //         eslogan: 'Liverpool',
    //     },
    //     {
    //         id:5 ,
    //         name:"Manchester United",
    //         descripcion: '',
    //         img: 'imagenes/ManchesterUnitedPrincipal.jpg',
    //         escudo: 'EscudoManchester.png',
    //         imgRepresentativa: 'imagenes/RealMadridRaul.jpg',
    //         eslogan: 'Manchester United',
    //     }
    // ]);

    const [equipos, setEquipos] = useState([])

    useEffect(() => {
        const dataBase = getDatabase();
        const starCountRef = ref(dataBase, 'Equipos/');
        get(starCountRef).then((snapshot) => {
            const data = snapshot.val();
            setEquipos(data);
            dispatch(cargarNumEquipos(data.length));
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className = {styles.Route}>
            <h1>Equipos</h1>
            <div className = {styles.ContenedorEquipo}>
                    {equipos.map((equipo) => (
                        <Container
                            key = {equipo.id}
                            equipo = {equipo}
                        />
                    ))}
            </div>
            <button id={styles.botonIngresar} onClick={() => dispatch(cambiarModalN())}>
                Ingresar nuevo equipo
            </button>
        </div>
    );
}

export default Equipos;