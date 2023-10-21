import {Link} from 'react-router-dom';
import styles from "./Navigator.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { inicioCambiar, acercaCambiar, equiposCambiar, eventosCambiar } from '../../store/navigatorBarSlice';

function Navigator(){
    const { inicio } = useSelector((estado) => estado.navigatorBar);
    const { acerca } = useSelector((estado) => estado.navigatorBar);
    const { equipos } = useSelector((estado) => estado.navigatorBar);
    const { eventos } = useSelector((estado) => estado.navigatorBar);
    const dispatch = useDispatch();

    return(
        <div className = {styles.contenedorNavigator}>
            <nav>
                
                <Link to = '/' className = {styles.contenedorLogo} onClick={() => dispatch(inicioCambiar())}>
                    <img src="LogoPagInver.png" className = {styles.Logo} alt="LogoPag"/>
                </Link>
                <Link to = '/' className = {`${styles.links} ${inicio === true ? styles.square: null}`} onClick={() => dispatch(inicioCambiar())}>
                    Inicio
                </Link>
                <Link to = '/Acerca' className = {`${styles.links} ${acerca === true ? styles.square : null}`} onClick={() => dispatch(acercaCambiar())}>
                    Acerca
                </Link>
                <Link to = '/equipos' className = {`${styles.links} ${equipos === true ? styles.square : null}`} onClick={() => dispatch(equiposCambiar())}>
                    Equipos
                </Link>
                <Link to = '/eventos' className = {`${styles.links} ${eventos === true ? styles.square : null}`} onClick={() => dispatch(eventosCambiar())}>    
                    Eventos
                </Link>
                {/* <Link className = {styles.search}>
                    Buscar
                </Link> */}
            </nav>
        </div>
        // <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Pricing</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navigator;