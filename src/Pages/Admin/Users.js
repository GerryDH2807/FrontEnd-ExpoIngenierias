import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { userTabledata } from '../../MockData/MockData';
import SearchBar from '../../Components/SearchBar/SearchBar';
import RoleFilter from '../../Components/RoleFilter/RoleFilter';

function Users() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleRoleFilter = (role) => {
        setSelectedRole(role);
    };

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <SearchBar onSearch={handleSearch} />
                    <RoleFilter onRoleFilter={handleRoleFilter} />
                </div>

                <div className="row mt-3">
                    <Table data={userTabledata} searchQuery={searchQuery} selectedRole={selectedRole} />
                </div>
            </div>
        </>
    );
}

export default Users;
