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
import ConstanciaTeacher from './pages/Teacher/TeacherCertificate/TeacherConstancia.js';
import Perfil from './pages/Teacher/TeacherProfile/TeacherProfile.js';
import TeacherAnoDet from './pages/Teacher/TeacherAdvertisements/DetailedAnnoun.js'
import ProjectRegister from './pages/Student/ProjectRegister/ProjResgister.js';
import ProjectResumen from './pages/Student/ProjectResumen/ProjectResumenContent.js';
import AnunciosStudent from './pages/Student/Announcement/Announ.js'
import StudentCertificate from './pages/Student/StudentCertificate/Constancia.js'
import MaterialExtra from './pages/Student/RegisterContent/RegisterContent.js';
import StudentMap from './pages/Student/StudentMap/StudentMap.js';
import ProjSelection from './pages/Student/ProjectSelection/ProjSelection.js';
import ProjectEdition from './pages/Student/ProjectEdition/ProjEdition.js';
import StudentAnnounDet from './pages/Student/Announcement/DetailedAnnoun.js'
import StudentProfile from './pages/Student/StudentProfile/StudentProfile.js';
import Callback from './auth0/callback.js';
import ProtectedRoute from './auth0/protect.js';

function App() {
  return (
    <>
      <div>
          <Routes>
              {/* Rutas de Profesor */}
              <Route path="/" element={<Main />} />
              <Route path="/Ediciones-pasadas" element={<EdicionesPasadas />} />
              <Route path="/Catalogo" element={<Catalogo />} />
              <Route path="/principal-profesor" element={<ProtectedRoute><Hometeacher /></ProtectedRoute>} />
              <Route path="/profesor/projects/:id_project" element={<ProtectedRoute><ProjResumeCont /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/Registro-usuario" element={<ProtectedRoute><FormUser /></ProtectedRoute>} />
              <Route path="/Registro-inicio" element={<ProtectedRoute><UserRegisterCont /></ProtectedRoute>} />
              <Route path="/anuncios-profesor" element={<ProtectedRoute><AnunciosTeacher /></ProtectedRoute>} />
              <Route path="/constancia-profesor" element={<ProtectedRoute><ConstanciaTeacher ConstCheck={"True"} /></ProtectedRoute>} />
              <Route path="/perfil-profesor" element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
              <Route path="/announ1-teacher" element={<ProtectedRoute><TeacherAnoDet /></ProtectedRoute>} />

              {/* Rutas de Alumno */}
              <Route path='/announ1-estudiante' element={<ProtectedRoute><StudentAnnounDet /></ProtectedRoute>} />
              <Route path="/registro-proyecto" element={<ProtectedRoute><ProjectRegister /></ProtectedRoute>} />
              <Route path="/resumen-proyecto-estudiante/:id_project" element={<ProtectedRoute><ProjectResumen /></ProtectedRoute>} />
              <Route path="/anuncio-estudiante" element={<ProtectedRoute><AnunciosStudent /></ProtectedRoute>} />
              <Route path="/constancia-estudiante" element={<ProtectedRoute><StudentCertificate ConstCheck={"True"} /></ProtectedRoute>} />
              <Route path="/extramaterial" element={<ProtectedRoute><MaterialExtra /></ProtectedRoute>} />
              <Route path="/mapa" element={<ProtectedRoute><StudentMap /></ProtectedRoute>} />
              <Route path="/principal-estudiante" element={<ProtectedRoute><ProjSelection ProjCheck={"True"} /></ProtectedRoute>} />
              <Route path='/EditProject/:id_project' element={<ProtectedRoute><ProjectEdition /></ProtectedRoute>} />
              <Route path='/student-profile' element ={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />

              <Route path="/Callback" element={<ProtectedRoute><Callback /></ProtectedRoute>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
