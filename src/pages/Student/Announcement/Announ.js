import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';
import './Announ.css';

function AnnounSearch({ handleSearch }) {
  const handleChange = (e) => {
    handleSearch(e.target.value); // Pasar el texto de búsqueda al componente padre
  };

  return (
    <div className='col-12 p-2'>
      <Form.Control
        required
        type="text"
        placeholder="Ingresa el título de un anuncio para buscar"
        className='InputFormat'
        onChange={handleChange}
      ></Form.Control>
    </div>
  );
}

function AnnounInfo({ Fecha, Titulo, Cuerpo }) {
  const truncatedText = (text, limit) => {
    if (!text || typeof text !== 'string' || text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return (
    <Link to={'/announ1-estudiante'} className='row m-3 p-2 AnnounInfoContainer d-flex align-items-center'>
      <div className='col-auto d-flex align-items-center'>
        <i className='bi bi-envelope-fill AnnounIcon'></i> <span className='Titulo'> {Titulo}</span>
      </div>

      <div className='col-7 d-flex align-items-center'>
        <span className='TextoAnnoun'>{truncatedText(Cuerpo, 100)}</span>
      </div>

      <div className='col-2 text-end'>
        <span className='Subtitulo text-wrap'>{Fecha}</span>
      </div>
    </Link>
  );
}

function AnnounInfoCont({ announcements }) {
  return (
    <div className='col-12 p-12'>
      <div className='container-fluid'>
        {announcements.map((announcement, index) => (
          <AnnounInfo
            key={index}
            Titulo={announcement.Titulo}
            Fecha={announcement.Fecha}
            Cuerpo={announcement.Cuerpo}
          />
        ))}
      </div>
    </div>
  );
}

export default function AnnounCont() {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredAnnouncements(allAnnouncements);
    } else {
      const filtered = allAnnouncements.filter(announcement =>
        announcement.Titulo.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredAnnouncements(filtered);
    }
  };

  // Simulación de datos iniciales de anuncios
  const initialAnnouncements = [
    { Titulo: 'Aguila Roja', Fecha: '20/02/24', Cuerpo: "Contenido del anuncio 1" },
    { Titulo: 'Barco Morado', Fecha: '15/05/19', Cuerpo: "Contenido del anuncio 2" },
    { Titulo: 'Carro rapido', Fecha: '28/07/03', Cuerpo: "Contenido del anuncio 3" }
  ];

  useState(() => {
    setAllAnnouncements(initialAnnouncements);
    setFilteredAnnouncements(initialAnnouncements);
  }, []);

  return (
    <>
      <StudentToggle NameSection={"Anuncios"}></StudentToggle>
      <div className='container-fluid mt-3 p-3'>
        <div className='row p-3 ContainerAnnoun'>
          <AnnounSearch handleSearch={handleSearch} />
        </div>

        <div className='row p-3 mt-4 ContainerAnnoun'>
          <AnnounInfoCont announcements={filteredAnnouncements} />
        </div>
      </div>
    </>
  );
}
