import styles from './NuevoEquipo.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sumarEquipo } from '../../store/equiposInfoSlice';
import { cambiarModalN } from '../../store/modalSlice';
import { getDatabase, ref, set } from 'firebase/database';


function NuevoEquipo(){
    const dispatch = useDispatch();
    const { numEquipos } = useSelector((estado) => estado.equiposInfo);

    const dataBase = getDatabase();
    const [error, setError] = useState(false);
    const [agregado, setAgregado] = useState(false);

    const agregarNuevoEquipo = () => {
        const nombre = document.getElementById("NombreEquipo").value;
        const descripcion = document.getElementById("Descripcion").value;
        const eslogan = document.getElementById("Eslogan").value;
        const escudo = document.getElementById("Escudo").value;
        const img = document.getElementById("ImagenPrincipal").value;   
    
        console.log(img, escudo);
        if (img && escudo && nombre) {
            console.log(numEquipos)
            set(ref(dataBase, `Equipos/${numEquipos}`), {
                name: nombre,
                descripcion: descripcion,
                eslogan: eslogan,
                escudo: escudo,
                img: img
            }).then(() => {
                dispatch(sumarEquipo());
                setAgregado(true);
            }).catch(() => {
                setError(true);
            }).finally(() => {
                console.log(numEquipos);
            });
        } else {
            setError(true);
        }
    };
    
    return(
        <div className={styles.contenedorModal}>
            <div className={styles.VentanaModal}>
                <button onClick={() => dispatch(cambiarModalN())} className={styles.cerrar}>
                    X
                </button>
                {!agregado ?
                    <div>
                        <h3>Agregar nuevo equipo</h3>
                        <input
                            id="NombreEquipo"
                            className={styles.entradas}
                            type="text"
                            placeholder="Nombre"
                        />
                        <input
                            id="Descripcion"
                            className={styles.entradas}
                            type="text"
                            placeholder="Descripcion"
                        />
                        <input
                            id="Eslogan"
                            className={styles.entradas}
                            type="text"
                            placeholder="Eslogan"
                        />
                        <p>Subir imagen del escudo</p>
                        <input
                            id="Escudo"
                            className={styles.entradasImg}
                            type="file" 
                            accept="image/*"
                            placeholder="escudo"
                        />
                        <p>Subir imagen principal</p>
                        <input
                            id="ImagenPrincipal"
                            className={styles.entradasImg}
                            type="file" 
                            accept="image/*"
                        />
                        {error ? <p>Por favor ingrese toda la informacion completa para agregar el equipo</p> : null}
                        <button className={styles.botonIniciar} onClick={agregarNuevoEquipo}>
                            Agregar
                        </button>
                    </div>
                :
                    <div id={styles.exitoso}>
                        <h1 className={styles.entradas}> Se agrego el equipo exitosamente.</h1>
                    </div>
                }
            </div>
        </div>
    );
}

export default NuevoEquipo;