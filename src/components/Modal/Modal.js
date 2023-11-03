import styles from './Modal.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarModalI } from '../../store/modalSlice';
import { auth, provider } from "../../firebase/configuracion";
import { signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { iniciarSesion } from '../../store/InicioSesionSlice';

function Modal(){
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const { sesion } = useSelector((estado) => estado.inicioSesion);
    const { informacion } = useSelector((estado) => estado.inicioSesion);
    
    const iniciarSG = () => {
        signInWithPopup(auth, provider).then(
            (data) => dispatch(iniciarSesion(data))
        ).catch(() => {
            setError(true);
        })
    }

    const iniciarS = () => {
        const correo = document.getElementById("CorreoElectronico").value;
        const contraseña = document.getElementById("Contraseña").value;
        console.log(correo, contraseña);
        signInWithEmailAndPassword(auth, correo, contraseña).then((usuario) => {
            dispatch(iniciarSesion(usuario));
        }).catch(() => {
            setError(true);
        })
    }

    return(
        <div className={styles.contenedorModal}>
            <div className={styles.VentanaModal}>
                <button onClick={() => dispatch(cambiarModalI())} className={styles.cerrar}>
                    X
                </button>
                {!sesion ?
                    <div>
                        <h3>Inicio de sesion</h3>
                        <input
                            id="CorreoElectronico"
                            className={styles.entradas}
                            type="text"
                            placeholder="Correo Electrónico"
                        />
                        <input
                            id="Contraseña"
                            className={styles.entradas}
                            type="password"
                            placeholder="Contraseña"
                        />
                        {error ? <p>problema con la informacion ingresada</p> : null}
                        <button className={styles.botonIniciar} onClick={iniciarS}>
                            Iniciar Sesión
                        </button>
                        <button className={styles.botonIniciar} onClick={iniciarSG}>
                            <img src="ContinuarGoogle.png" id={styles.imagenGoogle} alt='Google'/>
                        </button>
                    </div>
                :
                    <div id={styles.exitoso}>
                        <h1 className={styles.entradas}> usted inicio sesion exitosamente con el correo {informacion.email}</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal;