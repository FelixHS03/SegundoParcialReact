import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <span className="logo">TechWave</span>
        <div className="nav-links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">Nosotros</NavLink>
          <NavLink to="/products">Productos</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
