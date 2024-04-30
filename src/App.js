import './css/App.css';
import './css/Page.css';
import {Routes, Route} from 'react-router-dom'
import ProjResumeCont from './ProjectResumenTeacher.js';
import Hometeacher from './Hometeacher.js';
import Main from './main.js';
import Conocenos from './conocenos.js';
import Participar from './participar.js';
import EdicionesPasadas from './EdicionesPasadas.js';
import Catalogo from './Catalogo.js';
import Login from './login.js';
import FormUser from './UserRegister.js';
import FormStudent from './StudentRegister.js';
import UserRegisterCont from './RegisterContent.js'
import AnunciosTeacher from './anunciosTeacher.js';
import ConstanciaTeacher from './constanciaTeacher.js';
import Perfil from './perfils.js';
function App() {
  return (
<>
<div>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Conocenos" element={<Conocenos />} />
        <Route path="/Ediciones-pasadas" element={<EdicionesPasadas />} />
        <Route path="/Como-participar" element={<Participar />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/principal-profesor" element={<Hometeacher />} />
        <Route path="/resumen-proyecto" element={<ProjResumeCont />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro-usuario" element={<FormUser />} />
        <Route path="/Registro-estudiante" element={<FormStudent />} />
        <Route path="/Registro-inicio" element={<UserRegisterCont />} />
        <Route path="/anuncios-profesor" element={<AnunciosTeacher />} />
        <Route path="/constancia-profesor" element={<ConstanciaTeacher />} />
        <Route path="/perfil-usuario" element={<Perfil />} />
</Routes>
</div>
</>
  );
}

export default App;
