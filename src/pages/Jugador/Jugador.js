import styles from './Jugador.module.css'

function Jugador() {
    return (
        <div className = {styles.Route}>
            <div className={styles.ContenedorJugador}>
                <h1 className={styles.TituloJugador}>Jugador 1</h1>
                <p className={styles.ParrafoJugador}>
                    Ad tempor excepteur ea Lorem commodo deserunt aliquip nisi minim. Proident ad minim sunt culpa eiusmod. Mollit labore consectetur magna occaecat consectetur labore anim veniam esse ex. Proident sit id amet eiusmod reprehenderit in sint ullamco est esse labore nulla quis aute. Cillum do reprehenderit aute nulla in occaecat dolor reprehenderit sit laborum. Esse ullamco officia incididunt est mollit veniam Lorem Lorem. Laboris irure consectetur Lorem excepteur Lorem duis.

                    Nostrud laboris commodo incididunt laboris exercitation nulla culpa labore elit in id minim minim non. Officia commodo pariatur eiusmod tempor consectetur occaecat exercitation sunt sunt laboris sunt esse enim sunt. Ea nostrud ex labore amet aliqua aute veniam fugiat esse. Fugiat incididunt aliquip quis enim et id ut eiusmod proident enim sit ut. Voluptate ad dolor nisi labore irure nulla Lorem eu non deserunt exercitation.
                </p>
            </div>
            <img src="default.jpg" className = {styles.ImagenJugador} alt="Imagen del creador"/>
        </div>
    );
}

export default Jugador;