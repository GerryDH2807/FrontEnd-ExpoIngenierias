import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Inicio from './Inicio'; 
import Juez from './Juez'; 
import Admin from './Admin'; 
import Login from './Login'; 
import Rubrica from './Rubrica'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/juez" element={<Juez />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rubrica" element={<Rubrica />} />
        {/* Puedes agregar más rutas aquí para tus otras páginas */}
      </Routes>
    </div>
  );
}

export default App;
