// Componente funcional que recibe un GIF y lo muestra en una tarjeta
export const GifItem = ({ title, url }) => {
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
