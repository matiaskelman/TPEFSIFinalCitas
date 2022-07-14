import React from 'react'
import Cita from './Cita'
export const ListadoCitas = (citas) => {
  return (
    citas.map(cita=>(
        <Cita key={cita.nombre} nDueño={cita.nombre}/>
    ))
  )
}
