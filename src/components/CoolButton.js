import React from "react";
// Importamos los estilos de Bulma desde un archivo local.
// En un proyecto real esta línea sería: import "bulma/css/bulma.css";
import "../bulma.css";

/**
 * Diccionario que relaciona las props recibidas con las clases de Bulma.
 * Esto permite generar botones con estilos dinámicos únicamente
 * pasando props como isPrimary, isDanger, etc.
 */
const bulmaClasses = {
  // Nombre de la prop : clase de Bulma
  isCentered: "is-centered",
  isActive: "is-active",
  isBlack: "is-black",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white",
};

/**
 * Componente de botón reutilizable. Convierte las props recibidas
 * en clases de Bulma y permite incluir contenido mediante children.
 */
function CoolButton({ children, className, ...props }) {
  const classList = ["button"];

  // Recorremos el diccionario para añadir las clases correspondientes
  // y evitamos que las props personalizadas se propaguen al DOM.
  Object.keys(bulmaClasses).forEach((key) => {
    if (props[key]) {
      classList.push(bulmaClasses[key]);
      delete props[key];
    }
  });

  // Permitimos añadir clases adicionales mediante la prop className.
  if (className) classList.push(className);

  return (
    <button className={classList.join(" ")} {...props}>
      {children}
    </button>
  );
}

export default CoolButton;
