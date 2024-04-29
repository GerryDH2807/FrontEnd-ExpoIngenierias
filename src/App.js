import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import TitleBar from './Components/TitleBar/TitleBar';
import profileImg from './Assets/profile.jpg';
import Dashboard from './Pages/Admin/Dashboard';
import Historical from './Pages/Admin/Historical';
import Users from './Pages/Admin/Users';
import Projects from './Pages/Admin/Projects';
import ProjectPage from './Pages/Admin/ProjectPage';

function App() {
  return (
    <Router>
      <div>
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get current location
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    // Update the page title whenever the location changes
    setPageTitle(getTitle(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <TitleBar title={pageTitle} profileImg={profileImg} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/historico" element={<Historical />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyecto/:projectId" element={<ProjectPage setPageTitle={setPageTitle} />} />
      </Routes>
    </>
  );
}

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

export default App;
