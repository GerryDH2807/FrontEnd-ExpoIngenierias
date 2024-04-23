import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './Page.css';
import './Resume.css'
import './ProjectResumenContent.js';


import ProfPict from './img/descargar.jpeg'
import logo from './img/logo.svg';
import ProjResumeCont from './ProjectResumenContent.js';

import {Lienzo} from './components/Lienzo.js';

function Algo(){
  return (
    <div className='container-fluid mt-5 p-4 bg-primary'>
      <div className='row p-4 bg-warning '>
        <div className='col p-4 bg-secondary '>
          <p>gjsadasdadsd</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Lienzo/>

      <ProjResumeCont />
    
    </>

  );
}

export default App;
