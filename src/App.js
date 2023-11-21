import './App.css';
import {Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import Navigator from './components/NavigatorBar/Navigator';
import Modal from './components/Modal/Modal';
import ModalReg from './components/ModalReg/ModalReg'
import NuevoEquipo from './components/NuevoEquipo/NuevoEquipo';

import Home from './pages/Home/Home';
import Acerca from './pages/Acerca/Acerca';
import Equipos from './pages/Equipos/Equipos';
import Eventos from './pages/Eventos/Eventos';
import Equipo from './pages/Equipo/Equipo';
import Jugador from './pages/Jugador/Jugador';
import Footer from './components/Footer/Footer';
import Error404 from './pages/Error404/Error404';
import EventoInfo from './pages/EventoInfo/EventoInfo';


function App() {
  const { estadoModalI } = useSelector((estado) => estado.verModal);
  const { estadoModalR } = useSelector((estado) => estado.verModal);
  const { estadoModalN } = useSelector((estado) => estado.verModal);

    return (
      <div className = "App">
        <Navigator/>
        <Routes className = 'Rutas'>
          <Route exact path = '/' element = {<Home/>} />
          <Route exact path = '/Acerca' element = {<Acerca/>} />
          <Route exact path = '/Equipos' element = {<Equipos/>} />
          <Route exact path = '/Eventos' element = {<Eventos/>} />
          <Route exact path = '/Equipo' element = {<Equipo/>} />
          <Route exact path = '/Jugador' element = {<Jugador />} />
          <Route exact path = '/EventoInfo' element = {<EventoInfo />} />
          <Route exact path = '*' element = {<Error404/>} />
        </Routes>
        <Footer/>
        {estadoModalI ? <Modal/> : null}
        {estadoModalR ? <ModalReg/> : null}
        {estadoModalN ? <NuevoEquipo/> : null}
      </div>
    );
}

export default connect()(App);