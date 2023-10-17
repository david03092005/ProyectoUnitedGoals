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

            <div className={styles.ContenedorInformacion} id="1">
                <h2 className={styles.TituloCreador}>Creador Del deporte</h2>
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
            </div>
            <div className={styles.ContenedorInformacion} id="2">
                <h2 className={styles.TituloCreador}>Forma de jugarlo</h2>
                
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
                    
               
            </div>
            <div className={styles.ContenedorInformacion} id="3">
                <h2 className={styles.TituloCreador}>Competencias importantes</h2>
                
                    {/* <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p> */}
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
                    <img src="default.jpg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
                    
               
            </div>
        </div>
    );
}

export default Acerca;