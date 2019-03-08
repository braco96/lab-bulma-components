import React from 'react';
// Importamos los estilos de Bulma desde un archivo local.
// En un proyecto real esta línea sería: import "bulma/css/bulma.css";
import '../bulma.css';
import './Navbar.css';
import CoolButton from './CoolButton';

/**
 * Barra de navegación superior con enlaces y botones de autenticación.
 * Reutiliza el componente CoolButton para mantener consistencia de estilos.
 */
function Navbar() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Enlace a la página principal */}
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* Botón reutilizable para el acceso de usuarios */}
              <CoolButton isSuccess>Login</CoolButton>
              {/* Botón con estilo adicional */}
              <CoolButton isPrimary isRounded>
                Signup
              </CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
