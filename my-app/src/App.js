import logo from './logo.svg';
import './App.css';
import Form from './components/Formulario';
import { ListadoCitas } from './components/ListadoCitas';
function App() {
  return (
    <div className="App">
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className= "container">
    <div className = "row">
<div className="one-half column">

<h2>Crear mi Cita</h2>
<Form/>
</div>
<div className="one-half column">
<h2>Administra tus citas</h2>
<ListadoCitas/>
</div> 
    </div>

    </div>
    </div>
  );
}

export default App;
