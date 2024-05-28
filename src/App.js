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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Admin
import Dashboard from './Pages/Admin/Dashboard';
import Historical from './Pages/Admin/Historical';
import Users from './Pages/Admin/Users';
import Judges from './Pages/Admin/Judges';
import EditUserPage from './Pages/Admin/EditUserPage';
import Projects from './Pages/Admin/Projects';
import ProjectPage from './Pages/Admin/ProjectPage';
import Categorias from './Pages/Admin/Categorias';
import Areas from './Pages/Admin/Areas';
import EditAreaPage from './Pages/Admin/EditAreas';
import EditCategoryPage from './Pages/Admin/EditCategory';
import EditAnnouncePage from './Pages/Admin/EditAnnounces';
import CreateAreaPage from './Pages/Admin/CreateArea';
import CreateCategoryPage from './Pages/Admin/CreateCategory';
import CreateAnnouncePage from './Pages/Admin/CreateAnnounce';
// Judge
import Juez from './Pages/Juez/Juez';
import ProjResumeCont from './Pages/Juez/ProjectResumenContent';
import Rubrica from './Pages/Juez/Rubrica';
import Announces from './Pages/Admin/Announces';
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

  const location = useLocation(); // Get current location
  const [pageTitle, setPageTitle] = useState('');
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [isTargetDateReached, setIsTargetDateReached] = useState(false);
  let constancia;

  useEffect(() => {
    // Update the page title whenever the location changes
    setPageTitle(getTitle(location.pathname));
  }, [location.pathname]);
  
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
              <Route path="/principal-profesor" element={<ProtectedRoute requiredRole="teacher"><Hometeacher /></ProtectedRoute>} />
              <Route path="/profesor/:id_person/:id_project" element={<ProtectedRoute requiredRole="teacher"><ProjResumeCont /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/Registro-usuario" element={<ProtectedRoute requiredRole="teacher"><FormUser /></ProtectedRoute>} />
              <Route path="/Registro-inicio" element={<ProtectedRoute requiredRole="teacher"><UserRegisterCont /></ProtectedRoute>} />
              <Route path="/anuncios-profesor" element={<ProtectedRoute requiredRole="teacher"><AnunciosTeacher /></ProtectedRoute>} />
              <Route path="/constancia-profesor/:id_user" element={<ProtectedRoute requiredRole="teacher"><ConstanciaTeacher ConstCheck={"True"} /></ProtectedRoute>} />
              <Route path="/perfil-profesor/:id_user" element={<ProtectedRoute requiredRole="teacher"><Perfil /></ProtectedRoute>} />
              <Route path="/announ-teacher/:id_announ" element={<ProtectedRoute requiredRole="teacher"><TeacherAnoDet /></ProtectedRoute>} />

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
              <Route path="/Admin" element={<Dashboard />} />
              <Route path="/Admin/historico" element={<Historical />} />
              <Route path="/Admin/usuarios" element={<Users />} />
              <Route path="/Admin/usuarios/jueces/:projectId" element={<Judges />} />
              <Route path="/Admin/usuarios/:userId" element={<EditUserPage />} />
              <Route path="/Admin/proyectos" element={<Projects />} />
              <Route path="/Admin/proyectos/:projectId" element={<ProjectPage setPageTitle={setPageTitle} />} />
              <Route path="/Admin/proyecto/:id" element={<ProjectPage setPageTitle={setPageTitle} />} />
              <Route path="/Admin/anuncios" element={<Announces/>}/>
              <Route path="/Admin/areas" element={<Areas/>}/>
              <Route path='/Admin/areas/nuevo' element={<CreateAreaPage/>}/>
              <Route path="/Admin/areas/:areaId" element={<EditAreaPage/>}/>
              <Route path='/Admin/categorias' element={<Categorias/>}/>
              <Route path='/Admin/categorias/nuevo' element={<CreateCategoryPage/>}/>
              <Route path='/Admin/Categorias/:categoriaId' element={<EditCategoryPage/>}/>
              <Route path='/Admin/anuncios/:anunciosId' element={<EditAnnouncePage/>}/>
              <Route path='/Admin/anuncios/nuevo' element={<CreateAnnouncePage/>}/>

              <Route path='/Juez/ProyectosJuez' element={<Juez />}/>
              <Route path="/Juez/ProyectoJuez/:projectId" element={<ProjResumeCont />} />
              <Route path="/Juez/Calificar/:projectId" element={<Rubrica />} />
          </Routes>
      </div>
    </>
  );

  // Function to get title based on the current route
const getTitle = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Tablero';
    case '/historico':
      return 'Historico';
    case '/usuarios':
      return 'Usuarios';
    case '/proyectos':
      return 'Proyectos';
    default:
      return 'Your Default Title';
  }
};
}






export default App;
