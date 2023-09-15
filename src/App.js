import './App.css';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import { Connect, connect } from 'react-redux';

import Navigator from './components/NavigatorBar/Navigator';
import Modal from './components/Modal/Modal';

import Home from './pages/Home/Home';
import Acerca from './pages/Acerca/Acerca';
import Equipos from './pages/Equipos/Equipos';
import Eventos from './pages/Eventos/Eventos';
import Equipo from './pages/Equipo/Equipo';
import Jugador from './pages/Jugador/Jugador';

function App({showModal}) {
  // const [showModal, setShowModal] = useState(true);2
  const cerrarModal = () => {
    // setShowModal(false)
  }

    return (
      <div className = "App">
        <Navigator/>
        <Routes>
          <Route exact path = '/' element = {<Home/>} />
          <Route exact path = '/Acerca' element = {<Acerca/>} />
          <Route exact path = '/Equipos' element = {<Equipos/>} />
          <Route exact path = '/Eventos' element = {<Eventos/>} />
          <Route exact path='/Equipo' element = {<Equipo/>} />
          <Route exact path='/Jugador' element = {<Jugador />} />
        </Routes>
        {/* {showModal === true && <Modal cerrar={cerrarModal} />} */}
      </div>
    );
}

const mapStateToProps = (estado) => {
  return {
    showModal: estado.ui.showModal
  }
}

export default connect(mapStateToProps)(App);