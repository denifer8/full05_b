import React from 'react'

export default function Filtro(props) {
    const {setListaVuelos} = props;
    const buscarVuelos = async () => {
        const api = await fetch('http://localhost:4000/api/vuelos');
        const data = await api.json();
        setListaVuelos(data)
    }
  return (
    <div>Filtro
        <button onClick={buscarVuelos}>Buscar</button>
    </div>
  )
}
