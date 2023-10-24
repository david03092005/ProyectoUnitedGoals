import Menu from "../../components/MenuConteiner/Menu";
import styles from './Acerca.module.css';

function Acerca() {

    const menuOptions = [
        {
            indice: 1,
            opcion: "Creador del juego"
        },
        {
            indice: 2,
            opcion: "Forma de jugarlo"
        },
        {
            indice: 3,
            opcion: "Competencias importantes" 
        }
    ]

    return (
        <div className={styles.Route}>
            <Menu options = {menuOptions} />
            <div className={styles.ContenedorInformacion0} id="1">
                <div className={styles.Contenedor}>
                    <h2 className={styles.TituloCreador}>Creador Del deporte</h2>
                    <p className={styles.parrafo11}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                </div>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
            </div>

            <div className={styles.ContenedorInformacion1} id="2">
                <div className={styles.Contenedor}>
                    <h2 className={styles.Titulo2}>Forma de jugarlo</h2>
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                </div>
                <img src="balon.png" className = {styles.balon} alt="Imagen del creador" /> 
            </div>
            <div> 
                <h2 className={styles.TituloCompetencias}>Competencias importantes</h2>
                <div className={styles.ContenedorInformacion2} id="3">
                    <img src="mundial.jpg" className = {styles.ImagenCompetencias} alt="Imagen del creador" />
                    <img src="La.jpeg" className = {styles.ImagenCompetencias1} alt="Imagen del creador" />
                </div>
            </div>
        </div>
    );
}

export default Acerca;