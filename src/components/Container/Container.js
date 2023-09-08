import styles from "./Container.module.css";
import { Link } from "react-router-dom";

function Container({name}){
    
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
        <Link to = "/">
            <div className = {styles.container}>
                <h2 className = {styles.titulo}> {name} </h2>
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
