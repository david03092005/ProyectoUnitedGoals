import Menu from "../../components/MenuConteiner/Menu";




function Acerca() {

    const menuOptions = ["Opción 1", "Opción 2", "Opción 3" ];

    return (
        <div className = "Acerca">
            <div>
                <Menu options = {menuOptions} />
            </div>
            <div>
                <h2>Creador Del deporte</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. 
                </p>
            </div>
        </div>
    );
}

export default Acerca;