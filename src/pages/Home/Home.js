// import Container from "../../components/Container/Container";
// import React, {useState} from 'react';
import styles from './Home.module.css'
import ImgParallaxHome from '../../components/ImgParallaxHome/ImgParallaxHome';
function Home() {
    // const [posts] = useState([
    // {
    //     id: 1,
    //     name: "Maria"
    // }, 
    // {
    //     id: 2,
    //     name: "David"
    // },
    // {
    //     id: 3,
    //     name: "gustin"
    // }])
        
    // const getDataFromChild = (data) => {
    //     console.log(`Viendo data desde App: ${data}`)
    // }
      
    return (
        <div className={styles.fondo}>
            <h1 className={styles.titulo}>
                UNITED GOALS
            </h1>
            <ImgParallaxHome></ImgParallaxHome>
            <div className={styles.linea}> </div>
            <div className={styles.Route}>
                <h1 className={styles.subtitulo}>
                    Lo ultimo
                </h1>
                <video width="1000" height="700" controls>
                    <source src="./videos/MejoresMomentos.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={styles.linea1}> </div>
            <div className={styles.contenedorFrase}>
                <img src="homeImg2.jpg" className={styles.ImagenVideo1} alt="Imagen estadio"/>
                <p className={styles.frase}>
                El fútbol no es solo un deporte, es un sentimiento que late en el corazón de quienes
                <br/>
                creen en la magia de un balón y en la fortaleza de los sueños compartidos en un equipo. 
                </p> 
            </div>
        </div>
        // <div className = "App">
        //     <h1>Hola React</h1>
        //         {posts.map((p, i) => (
        //             <Container
        //                 key = {p.id}
        //                 name = {p.name}
        //                 getData = {getDataFromChild}
        //             />
        //         ))}
        // </div>
    );
}

export default Home;