import React, { useState } from 'react';
import { criteria } from './components/rubricadata.js';
import { Lienzo } from './components/Lienzo.js';
import { Link } from 'react-router-dom';
import './Rubrica.css';

const Rubrica = () => {
  const [selectedCriteria, setSelectedCriteria] = useState(Array(criteria.length).fill(0));
  const [comments, setComments] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleCheckboxChange = (index, levelIndex) => {
    setSelectedCriteria(prevSelectedCriteria => {
      const newSelectedCriteria = [...prevSelectedCriteria];
      newSelectedCriteria[index] = levelIndex;
      return newSelectedCriteria;
    });
  };

  const handleSubmit = () => {
    // Check if comments are empty or less than 100 characters
    if (!comments.trim() || comments.trim().length < 100) {
      setShowErrorMessage(true);
      return;
    }

    // Calculate total score and message
    const totalScore = selectedCriteria.reduce((acc, levelIndex, index) => {
      const level = criteria[index].levels[levelIndex];
      return acc + level.score;
    }, 0);

    const criteriaMessage = selectedCriteria.map((levelIndex, index) => {
      const level = criteria[index].levels[levelIndex];
      return `Criteria ${index + 1}: ${level.name} - Score: ${level.score}`;
    }).join('\n');

    // Display total score, criteria and comments in a pop-up
    if (window.confirm(`¿Estás seguro de que deseas enviar tu rúbrica?\n\nPuntaje Total: ${totalScore}\n${criteriaMessage}\nComentarios: ${comments}`)) {
      window.location.href = './juez'; // Redirige al usuario a la página /juez
    }
  };

  return (
    <div className="container">
      <Lienzo />
      <h1>CALIFICA EL PROYECTO EN BASE A LA RÚBRICA</h1>
      <div className="rubrica-container">
        {criteria.map((criterion, index) => (
          <div className="criterion" key={index}>
            <h3>Criterio {index + 1}</h3>
            <div className="checkboxes-container">
              {criterion.levels.map((level, levelIndex) => (
                <div key={levelIndex}>
                  <input
                    type="checkbox"
                    checked={selectedCriteria[index] === levelIndex}
                    onChange={() => handleCheckboxChange(index, levelIndex)}
                  />
                  <label>{level.name}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <textarea
          placeholder="Comentarios adicionales..."
          className="comment-box"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        {showErrorMessage && (comments.trim() === '' || comments.trim().length < 100) && <p className="error-message">Por favor, ingresa tus comentarios con al menos 100 caracteres.</p>}
        <div className="buttons-container2">
      <Link to="/Juez" className="btn2">Cancelar</Link>
      <button onClick={handleSubmit} className="btn3">Enviar</button>
      </div>
      </div>
    </div>
  );
};

export default Rubrica;
