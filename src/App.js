import React, { useState } from 'react';

import './App.css';
import moment from 'moment'
import Filtro from './components/filtro/Filtro';
import Listado from './components/listado/Listado';

function App() {
  { const fecha = moment();}
  const [listaVuelos, setListaVuelos] = useState([])
  return (
    <div className="App">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        { ( listaVuelos.length === 0 && <Filtro setListaVuelos={setListaVuelos} /> )}
        { ( listaVuelos.length !== 0 && <Listado listaVuelos={listaVuelos} vaciarVuelos={()=>setListaVuelos([])}  /> )}
    </div>
  );
}

export default App;
