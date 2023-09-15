// import Container from "../../components/Container/Container";
// import React, {useState} from 'react';
import styles from './Home.module.css'

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
        <div className={styles.Route}>
            <h1>
                UNITED GOALS
            </h1>
            <div className={styles.ContenedorVideo}>
                <img src="default.jpg" className = {styles.ImagenVideo} alt="Imagen del creador"/>
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