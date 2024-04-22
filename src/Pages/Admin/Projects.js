import React, { useState } from 'react';
import ProjectCardsList from '../../Components/ProjectCard/ProjectCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import DropdownMenu from '../../Components/DropdownMenu/DropdownMenu'; // Import DropdownMenu component
import { dropdownOptions } from '../../MockData/MockData';

function Projects() {
    const [selectedEdition, setSelectedEdition] = useState(null); // State to track selected edition
    const [searchTerm, setSearchTerm] = useState(""); // State to track search term

    const handleEditionSelect = (edition) => {
        setSelectedEdition(edition);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>  
            <div className="container-fluid mt-3">
                <div className="row mb-3">
                    <SearchBar onSearch={handleSearch} />
                    <div className='col-md-4'>
                        <DropdownMenu 
                            title="Selecciona la Edición"
                            options={[...dropdownOptions, "Selecciona la Edición"]}
                            onSelect={(edition) => {
                                if (edition === "Selecciona la Edición") {
                                    setSelectedEdition(null);
                                } else {
                                    setSelectedEdition(edition);
                                }
                            }}
                        />
                    </div>     
                </div>
                <div className="row">
                    <ProjectCardsList filter={selectedEdition} searchTerm={searchTerm} />
                </div>
            </div>
        </>
    );
}

export default Projects;
