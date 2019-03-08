import React from 'react';
// Importamos los estilos de Bulma desde un archivo local.
// En un proyecto real esta línea sería: import "bulma/css/bulma.css";
import '../bulma.css';
import './FormField.css';

/**
 * Componente reutilizable para renderizar un campo de formulario.
 * Recibe el texto del label, el tipo de input y el placeholder como props
 * para poder personalizar distintos campos con Bulma.
 */
function FormField({ label, type, placeholder }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        {/* Input configurado dinámicamente mediante las props */}
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default FormField;
