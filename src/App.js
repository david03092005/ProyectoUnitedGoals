import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navigator from './components/NavigatorBar/Navigator';

import Home from './pages/Home/Home';
import Acerca from './pages/Acerca/Acerca';
import Equipos from './pages/Equipos/Equipos';
import Eventos from './pages/Eventos/Eventos';

function App() {
    return (
      <div className = "App">
        <Navigator/>
        <Routes>
          <Route exact path = '/' element = {<Home/>} />
          <Route exact path = '/Acerca' element = {<Acerca/>} />
          <Route exact path = '/Equipos' element = {<Equipos/>} />
          <Route exact path = '/Eventos' element = {<Eventos/>} />
        </Routes>
      </div>
    );
}

export default App;
