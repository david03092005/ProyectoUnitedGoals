import styles from "./Error404.module.css"

function Error404() {
    return(
        <div className={styles.contenedorError}>
            <h1>Página no encontrada - Page not found :|</h1>
            <img src="Error404.png" className={styles.imagenError404} alt="Error"/>
        </div>
    );
}

export default Error404;