import React, { useState } from 'react';
import { data } from './components/data.js';
import { Lienzo } from './components/Lienzo.js';
import { Cardlist } from './components/CardJuez.js';
import './Juez.css';

function PageJuez() {
  const [filterText, setFilterText] = useState("");

  function handleChange(e) {
    setFilterText(e.target.value);
  };

  const filteredData = data.filter(post =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <Lienzo />
      <div className="container-fluid">
        <div className="centered-content">
          <input placeholder="Buscar proyecto por nombre" type="text" name="text" class="input" value={filterText} onChange={handleChange}></input>
        </div>
        <div className="proyectos">
          <Cardlist posts={filteredData} />
        </div>
      </div>
    </>
  );
}

export default PageJuez;
