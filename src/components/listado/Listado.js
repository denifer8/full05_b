import moment from 'moment';
import React from 'react'

export default function Listado(props) {
    const {listaVuelos, vaciarVuelos} = props;
    let momentoSalida;
  return (
    <div>
        Listado
        <div className='listado'>
            {
            listaVuelos.map( (vuelo, index) => (
                <div key={index}>
                    ho
                    {momentoSalida = moment(vuelo[0].fechaSalida + ' ' + vuelo[0].horaSalida, "dd/mm/yyyy HH:mm:ss")}
                    {vuelo[0].nombreAerolinea}
                    {vuelo[0].horaSalida}
                    {vuelo[vuelo.length -1].horaLlegada}
                    
                    </div>
            )
            )
            }
        </div>
        <button onClick={vaciarVuelos} >Back</button>
    </div>
  )
}
