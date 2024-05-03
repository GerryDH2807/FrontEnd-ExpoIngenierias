import './App.css';
import './Page.css';
import {Routes, Route} from 'react-router-dom'
import ProjResumeCont from './pages/Teacher/TeacherProjectResumen/TeacherProjectResumen.js';
import Hometeacher from './pages/Teacher/TeacherHome/TeacherHome.js';
import Main from './pages/Main/MainPage/main.js';
import EdicionesPasadas from './pages/Main/PastEdition/EdicionesPasadas.js';
import Catalogo from './pages/Main/Catalogue/Actual.js';
import Login from './pages/Main/Login/login.js';
import FormUser from './pages/Main/UserRegister/UserRegister.js';
import FormStudent from './pages/Main/StudentRegister/StudentRegister.js';
import UserRegisterCont from './pages/Main/RegisterContent/RegisterContent.js'
import AnunciosTeacher from './pages/Teacher/TeacherAdvertisements/TeacherAdvertisements.js';
import ConstanciaTeacher from './pages/Teacher/TeacherCertificate/TeacherCertificate.js';
import Perfil from './pages/Teacher/TeacherProfile/TeacherProfile.js';
import TeacherAnoDet from './pages/Teacher/TeacherAdvertisements/DetailedAnnoun.js'
import ProjectRegister from './pages/Student/ProjectRegister/ProjResgister.js';
import ProjectResumen from './pages/Student/ProjectResumenContest/ProjectResumenContent.js';
import AnunciosStudent from './pages/Student/Announcement/Announ.js'
import StudentCertificate from './pages/Student/StudentCertificate/StudentCertificate.js'
import MaterialExtra from './pages/Student/RegisterContent/RegisterContent.js';
import StudentMap from './pages/Student/StudentMap/StudentMap.js';
import ProjSelection from './pages/Student/ProjSelection/ProjSelection.js'
function App() {
  return (
<>
<div>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Ediciones-pasadas" element={<EdicionesPasadas />} />
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
        <Route path="/announ1" element={<TeacherAnoDet />} />
        <Route path="/registro-proyecto" element={<ProjectRegister />} />
        <Route path="/resumen-proyecto-estudiante" element={<ProjectResumen />} />
        <Route path="/anuncio-estudiante" element={<AnunciosStudent />} />
        <Route path="/constancia-estudiante" element={<StudentCertificate />} />
        <Route path="/extramaterial" element={<MaterialExtra />} />
        <Route path="/mapa" element={<StudentMap />} />
        <Route path="/projselection" element={<ProjSelection />} />
</Routes>
</div>
</>
  );
}

export default App;
