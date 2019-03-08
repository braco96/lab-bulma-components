import React from 'react';
// Importamos los estilos de Bulma desde un archivo local.
// En un proyecto real esta línea sería: import "bulma/css/bulma.css";
import '../bulma.css';

/**
 * Diccionario para convertir props en clases de color de Bulma.
 * Permite reutilizar el componente con distintos estilos.
 */
const messageClasses = {
  isInfo: 'is-info',
  isSuccess: 'is-success',
  isWarning: 'is-warning',
  isDanger: 'is-danger',
};

/**
 * Componente Message de Bulma. Muestra un encabezado y un contenido,
 * y puede cambiar de color según las props recibidas.
 */
function Message({ title, children, className, ...props }) {
  const classList = ['message'];

  // Añadimos las clases de color correspondientes y evitamos propagarlas al DOM.
  Object.keys(messageClasses).forEach((key) => {
    if (props[key]) {
      classList.push(messageClasses[key]);
      delete props[key];
    }
  });

  if (className) classList.push(className);

  return (
    <article className={classList.join(' ')} {...props}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">{children}</div>
    </article>
  );
}

export default Message;
