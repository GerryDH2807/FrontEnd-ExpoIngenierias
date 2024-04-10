import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar el JavaScript de Bootstrap
import '../Juez.css';

function Card({ title, image, description }) {
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="card">
      <div className="imag">
        <img src={require("../img/"+image)} alt={title}/>
      </div>

      <div className="text">
        <p className="h3">{truncateText(title, 50)}</p>
        <p className="p">{truncateText(description, 100)}</p>

        <Link to="/inicio" className="btn">Ver Proyecto</Link>
      </div>
    </div>
  );
}

function CardCalif({ title, image, description }) {
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="card">
      <div className="imag">
        <img src={require("../img/"+image)} alt={title}/>
      </div>

      <div className="text">
        <p className="h3">{truncateText(title, 50)}</p>
        <p className="p">{truncateText(description, 100)}</p>

        <Link to="/inicio" className="btn">Ver Proyecto</Link>
        <Link to="/inicio" className="btncalif">Calificar</Link>
      </div>
    </div>
  );
}

export function Cardlist({ posts }) {
  const list = posts.map(post => 
    <CardCalif title={post.title} date={post.image} image={post.image} description={post.description} key={post.id} />
  )


  return (
    <>
      {list}
    </>
  );
}
