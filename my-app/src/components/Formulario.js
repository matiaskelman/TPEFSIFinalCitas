import React, { useState } from "react"

export default function Form() {
    const [citas, setCitas]= useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("eeee");
        setCitas([inputField.nombreDueño])
        console.log(citas)
    }

    return (
        <>
        
        <form onSubmit={handleSubmit} required>
        <label>Nombre Mascota</label>
        <input className="u-full-width"
            type="text"
            name="nombrePerro"
            placeholder="Nombre del perro" required/>

        <br />
        <label>Nombre dueño</label>
        <input className="u-full-width"
            type="text"
            name="nombreDueño"
            placeholder="Nombre del dueño" 
            value={this.state.value}
            required/>
           

        <br />
        <label>Fecha</label>
        <input className="u-full-width"
            type="date"
            name="fecha"
            placeholder="Fecha" required/>

        <br />
        <label>Hora</label>
        <input className="u-full-width"
            type="time"
            name="hora"
            placeholder="hora" required/>

        <br />
        <label>Sintomas</label>
        <textarea className="u-full-width"
            type="textarea"
            name="sintomas"
            placeholder="Sintomas" required/>

        <br />
        <button type="submit" className="btn-primary btn-add" onSubmit={handleSubmit} >Agregar Cita</button>
    </form>
    
    </>
    )
}