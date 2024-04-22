import React, { useState } from 'react';

function DropdownMenu({ title , options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle {btn-lg}" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedOption ? selectedOption : title}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#" onClick={() => handleOptionSelect(option)}>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
