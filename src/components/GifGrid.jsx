// Importa el hook personalizado que obtiene los GIFs según la categoría
import { useFetchGifs } from "../hooks/useFetchGifs";

// Importa el componente GifItem para mostrar cada GIF
import { GifItem } from "../components/GifItem";

// Componente que muestra una cuadrícula de GIFs basada en una categoría
export const GifGrid = ({ category }) => {
  // Obtiene las imágenes y el estado de carga desde el hook personalizado
  const { images, isLoading } = useFetchGifs(category);

  // Comentado: Muestra en consola las imágenes obtenidas y el estado de carga
  // console.log(images, isLoading);

  return (
    <>
      {/* Muestra el nombre de la categoría como título */}
      <h3>{category}</h3>
      {isLoading && <h2>Cargando.....</h2>}

      {/* Contenedor para los GIFs, estructurado en una cuadrícula */}
      <div className="card-grid">
        {/* Itera sobre las imágenes y renderiza un GifItem por cada una */}
        {images.map((image) => (
          <GifItem key={image.id} {...image} /> // Desestructura las propiedades del objeto "image"
        ))}
      </div>
    </>
  );
};
