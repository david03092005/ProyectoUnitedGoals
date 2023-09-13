import Menu from "../../components/MenuConteiner/Menu";
import styles from './Acerca.module.css'

function Acerca() {

    const menuOptions = ["Creador del juego", "Forma de jugarlo", "Competencias importantes" ];

    return (
        <div>
            <Menu options = {menuOptions} />
            <div className={styles.ContenedorInformacion}>
                <h2>Creador Del deporte</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. 
                    Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. 
                    Pellentesque feugiat molestie enim a aliquam. 
                </p>
            </div>
        </div>
    );
}

export default Acerca;