import Menu from "../../components/MenuConteiner/Menu";
import styles from './Acerca.module.css'

function Acerca() {

    const menuOptions = ["Creador del juego", "Forma de jugarlo", "Competencias importantes" ];

    return (
        <div className={styles.Route}>
            <Menu options = {menuOptions} />

            <div className={styles.ContenedorInformacion}>
                <h2 className={styles.TituloCreador}>Creador Del deporte</h2>
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
            </div>
            <div className={styles.ContenedorInformacion}>
                <h2 className={styles.TituloCreador}>Forma de jugarlo</h2>
                
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
                    
               
            </div>
            <div className={styles.ContenedorInformacion}>
                <h2 className={styles.TituloCreador}>Competencias importantes</h2>
                
                    <p className={styles.parrafo1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                        Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                        Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <img src="creadorDeporte.jpeg" className = {styles.ImagenCreadorDeporte} alt="Imagen del creador" />
                    
               
            </div>
        </div>
    );
}

export default Acerca;