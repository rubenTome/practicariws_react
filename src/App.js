import './App.css';
import Inicio from './Components/Inicio';
import Buscador from "./Components/Buscador"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Inicio}/>
        <Route path='/buscador' Component={Buscador}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
