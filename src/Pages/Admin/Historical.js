import React, { useState } from 'react';
import DropdownMenu from '../../Components/DropdownMenu/DropdownMenu';
import ContentCard from '../../Components/ContentCard/ContentCard';
import { dropdownOptions } from '../../MockData/MockData';

function Historical() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleExport = () => {
    setButtonClicked(true);
    if (!selectedOption) {
      alert("Debes seleccionar una opción antes de exportar.");
    } else {
      // Export logic
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-md-12">
            <ContentCard title="Exportar Histórico" subtitle="Selecciona Edición" content={
              <>
                <DropdownMenu title="Selecciona la Edición" options={dropdownOptions} onSelect={handleOptionSelect} />
                {buttonClicked && !selectedOption && <p className="text-danger">Debes seleccionar una opción.</p>}
              </>
            } />
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary custom-primaty-btn" onClick={handleExport}>Exportar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Historical;
