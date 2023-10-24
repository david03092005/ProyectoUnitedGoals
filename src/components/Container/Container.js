import styles from "./Container.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cargarEquipos } from "../../store/equiposInfoSlice";

function Container({equipo}){
    const dispatch = useDispatch();
    // const [showMessage, setShowMessage] = useState(true)
    // const [message, setMessage] = useState(`Bienvenido ${name}`)
    // const onButtonClick = () => {
    //     if (message){
    //         setMessage(`Me presionaron, auxilio!!!!!!`)
    //         setShowMessage(!showMessage)
    //     }
    //     getData(10)
    // }
    
    return(
        <Link to = "/Equipo" onClick={() => (dispatch(cargarEquipos(equipo)))}>
            <div className = {styles.container}>
            <img src={equipo.escudo} className = {styles.ImagenEquipo} alt="Imagen del creador"/>
                <h2 className = {styles.titulo}> {equipo.name} </h2>
                <p className={styles.ParrafoC}>
                    lorem, ipsum.
                </p>
                {/* {
                    showMessage ?
                    <p>
                        {message}
                    </p>
                    :
                    null
                } */}
                {/* <Link to = '/about'>
                    About
                </Link> */}
            </div>
        </Link>
    );
}

export default Container;
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         message:  `Bienvenido ${this.props.name}`,
    //     };

    //     this.onButtonClick = this.onButtonClick.bind(this);
    // }

    // onButtonClick(){
    //     if (this.state.message){
    //         this.setState({message: "Me presionaron, auxilio!!!!!!"});
    //     };
    //     this.props.getData(`Cargando`);
    // }
