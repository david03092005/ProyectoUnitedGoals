import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.ContenedorFooter}>
            <footer className={styles.Footer}>
                <h6>Inicio</h6>
                <h6>Acerca</h6>
                <h6>Equipos</h6>
                <h6>Eventos</h6>
                <h6>Redes sociales</h6>
            </footer>
        </div>
    );
}

export default Footer;