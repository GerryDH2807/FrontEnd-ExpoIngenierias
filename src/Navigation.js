import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/inicio">InicioGerry</Link>
        </li>
        <li>
          <Link to="/admin">ADMIN</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/juez">JUEZ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
