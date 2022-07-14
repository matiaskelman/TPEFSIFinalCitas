import React from "react"

export default function Cita(nPerro, nDueño, hora, fecha, sintomas) {
  return (
    <>

      <div className="cita">
        <p>Mascota: <span>{nPerro}</span></p>
        <p>Dueño: <span>{nDueño}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>

    </>
  )

}