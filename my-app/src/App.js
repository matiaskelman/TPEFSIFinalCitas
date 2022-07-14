import logo from './logo.svg';
import './App.css';
import Form from './components/Formulario';
import { ListadoCitas } from './components/ListadoCitas';
import { React, useState } from 'react';
function App() {

const [form, setForm] = useState(
  {
    nPerro : "",
    nDueño : ""
  }
)


  return (
    <div className="App">
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className= "container">
    <div className = "row">
<div className="one-half column">

<h2>Crear mi Cita</h2>
<Form
forrm = {form}
setForm = {setForm}
/>
</div>
<div className="one-half column">
<h2>Administra tus citas</h2>
{/* <ListadoCitas/> */}
</div> 
    </div>

    </div>
    </div>
  );
}

export default App;
