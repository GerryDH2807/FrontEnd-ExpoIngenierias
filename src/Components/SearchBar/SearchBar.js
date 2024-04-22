import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="col-md-4">
            {/* Search Bar */}
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar..." 
                    value={searchTerm}
                    onChange={handleChange}
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={handleSearch}
                    >
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
