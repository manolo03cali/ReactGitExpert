import React from "react";
import PropTypes from "prop-types";
// Componente funcional que recibe un GIF y lo muestra en una tarjeta
export const GifItem = ({ title, url, id }) => {
  // Comentado: Muestra en consola los datos recibidos del GIF
  // console.log(title, url, id);

  return (
    <>
      {/* Contenedor de la tarjeta que muestra la imagen y el título */}
      <div className="card">
        {/* Imagen del GIF con su respectiva descripción alternativa */}
        <img src={url} alt={title} />
        {/* Título del GIF */}
        <p>{title}</p>
      </div>
    </>
  );
};
//ojo verificar el nuevo funcionamiento de prop-types en versiones actuales de react
//porque ya no esta evaluando de esta manera.
GifItem.prototypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
