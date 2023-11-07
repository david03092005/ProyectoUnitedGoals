import styles from './ModalReg.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cambiarModalR } from '../../store/modalSlice';
import { auth, provider } from "../../firebase/configuracion";
import { signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { iniciarSesion } from '../../store/InicioSesionSlice';

function Modal(){
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const { sesion } = useSelector((estado) => estado.inicioSesion);
    const { informacion } = useSelector((estado) => estado.inicioSesion);
    
    const iniciarSG = () => {
        signInWithPopup(auth, provider).then(
            (data) => dispatch(iniciarSesion(data))
        ).catch(() => {
            setError(true);
        })
    }

    const registrarseS = () => {
        const correo = document.getElementById("CorreoElectronico").value;
        const contraseña = document.getElementById("Contraseña").value;
        console.log(correo, contraseña);
        createUserWithEmailAndPassword(auth, correo, contraseña).then((usuario) => {
            dispatch(iniciarSesion(usuario));
        }).catch(() => {
            setError(true);
        })
    }

    return(
        <div className={styles.contenedorModal}>
            <div className={styles.VentanaModal}>
                <button onClick={() => dispatch(cambiarModalR())} className={styles.cerrar}>
                    X
                </button>
                {!sesion ?
                    <div>
                        <h3>Registro de usuario</h3>
                        <input
                            id="Nombre de usuario"
                            className={styles.entradas}
                            type="text"
                            placeholder="Nombre de usuario"
                        />
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
                        <button className={styles.botonIniciar} onClick={registrarseS}>
                            Registrarse
                        </button>
                        <button className={styles.botonIniciar} onClick={iniciarSG}>
                            <img src="ContinuarGoogle.png" id={styles.imagenGoogle} alt="Google"/>
                        </button>
                    </div>
                :
                    <div id={styles.exitoso}>
                        <h1 className={styles.entradas}> usted se registro exitosamente con el correo {informacion.email}</h1>
                        <button className={styles.botonIniciar} onClick={() => dispatch(cambiarModalR())}>
                            continuar
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal;