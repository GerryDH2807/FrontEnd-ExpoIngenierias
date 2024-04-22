import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import TitleBar from './Components/TitleBar/TitleBar';
import profileImg from './Assets/profile.jpg';
import Dashboard from './Pages/Admin/Dashboard';
import Historical from './Pages/Admin//Historical';
import Users from './Pages/Admin/Users';
import Projects from './Pages/Admin/Projects';

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

  return (
    <>
      <TitleBar title={getTitle(location.pathname)} profileImg={profileImg} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/historico" element={<Historical />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/proyectos" element={<Projects />} />
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
