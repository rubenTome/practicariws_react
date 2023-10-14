import './App.css';
import Inicio from './Components/Inicio';

import oak from "./Assets/Images/oak.png"
import fondo from "./Assets/Images/fondo_pokedex_2.jpg"

function App() {
  return (
    <div className="App">
      <Inicio url={oak} fondo={fondo}/>
    </div>
  );
}

export default App;
