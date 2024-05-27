import './App.css';
import './Page.css';
import {Routes, Route} from 'react-router-dom'
import React, { useState,useEffect} from "react";
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
import MaterialExtra from './pages/Student/ExtraMaterials/materiales.js';
import StudentMap from './pages/Student/StudentMap/StudentMap.js';
import ProjSelection from './pages/Student/ProjectSelection/ProjSelection.js';
import ProjectEdition from './pages/Student/ProjectEdition/ProjEdition.js';
import StudentAnnounDet from './pages/Student/Announcement/DetailedAnnoun.js'
import StudentProfile from './pages/Student/StudentProfile/StudentProfile.js';
import Callback from './auth0/callback.js';
import ProtectedRoute from './auth0/protect.js';

const getCurrentDate = () => {
  const now = new Date();
  const options = { day: 'numeric', month: 'long' }; // Opciones para formatear la fecha
  return now.toLocaleDateString('es-ES', options);
};
const isDateEqualOrAfter = (specificDate) => {
  const now = new Date();
  const targetDate = new Date(specificDate);
  return now >= targetDate;
};

function App() {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [isTargetDateReached, setIsTargetDateReached] = useState(false);
  let constancia;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTargetDateReached(isDateEqualOrAfter('2024-05-25'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  if(isTargetDateReached == true){
    constancia = "True";
  }
  else{
    constancia = "False";
  }

  
  return (
    <>
      <div>
          <Routes>
              {/*Main Routes */}
              <Route path="/" element={<Main />} />
              <Route path="/Ediciones-pasadas" element={<EdicionesPasadas />} />
              <Route path="/Catalogo" element={<Catalogo />} />

              {/*Teacher Routes */}
              <Route path="/principal-profesor" element={<ProtectedRoute requiredRole="student"><Hometeacher /></ProtectedRoute>} />
              <Route path="/profesor/:id_person/:id_project" element={<ProtectedRoute requiredRole="student"><ProjResumeCont /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/Registro-usuario" element={<ProtectedRoute requiredRole="student"><FormUser /></ProtectedRoute>} />
              <Route path="/Registro-inicio" element={<ProtectedRoute requiredRole="student"><UserRegisterCont /></ProtectedRoute>} />
              <Route path="/anuncios-profesor" element={<ProtectedRoute requiredRole="student"><AnunciosTeacher /></ProtectedRoute>} />
              <Route path="/constancia-profesor/:id_user" element={<ProtectedRoute requiredRole="student"><ConstanciaTeacher ConstCheck={"True"} /></ProtectedRoute>} />
              <Route path="/perfil-profesor/:id_user" element={<ProtectedRoute requiredRole="student"><Perfil /></ProtectedRoute>} />
              <Route path="/announ-teacher/:id_announ" element={<ProtectedRoute requiredRole="student"><TeacherAnoDet /></ProtectedRoute>} />

              {/*Student Routes */}
              <Route path='/announ-estudiante/:id_announ' element={<ProtectedRoute requiredRole="student"><StudentAnnounDet /></ProtectedRoute>} />
              <Route path="/registro-proyecto" element={<ProtectedRoute requiredRole="student"><ProjectRegister /></ProtectedRoute>} />
              <Route path="/resumen-proyecto-estudiante/:id_project" element={<ProtectedRoute requiredRole="student"><ProjectResumen /></ProtectedRoute>} />
              <Route path="/anuncio-estudiante" element={<ProtectedRoute requiredRole="student"><AnunciosStudent /></ProtectedRoute>} />
              <Route path="/constancia-estudiante" element={<ProtectedRoute requiredRole="student"><StudentCertificate ConstCheck={constancia} /></ProtectedRoute>} />
              <Route path="/extramaterial/:id_project" element={<ProtectedRoute requiredRole="student"><MaterialExtra ProjCheck={"True"}/></ProtectedRoute>} />
              <Route path="/mapa" element={<ProtectedRoute requiredRole="student"><StudentMap /></ProtectedRoute>} />
              <Route path="/principal-estudiante" element={<ProtectedRoute requiredRole="student"><ProjSelection/></ProtectedRoute>} />
              <Route path='/EditProject/:id_project' element={<ProtectedRoute requiredRole="student"><ProjectEdition /></ProtectedRoute>} />
              <Route path='/student-profile/' element={<ProtectedRoute requiredRole="student"><StudentProfile /></ProtectedRoute>} />
              <Route path="/Callback" element={<Callback />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
