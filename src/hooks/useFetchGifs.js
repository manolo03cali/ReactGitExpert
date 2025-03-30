import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Hook personalizado que obtiene y gestiona imágenes GIF según la categoría proporcionada
export const useFetchGifs = (category) => {
  // Estado para almacenar las imágenes obtenidas
  const [images, setImages] = useState([]);

  // Estado para manejar el estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Función asíncrona que obtiene las imágenes de la API
  const getImages = async () => {
    // Llama a la función getGifs para obtener los GIFs según la categoría
    const newImages = await getGifs(category);

    // Actualiza el estado con las nuevas imágenes
    setImages(newImages);

    // Cambia el estado de carga a falso ya que la operación ha terminado
    //no dispara nueva renderizaci'on
    setIsLoading(false);
  };

  // useEffect se ejecuta una sola vez al montar el componente para obtener los GIFs
  useEffect(() => {
    getImages();
  }, []);

  // Retorna un objeto con las imágenes y el estado de carga
  //  images: images,- isLoading: isLoading, cuando hace referencia a la misma propiedad se deja un solo nombre
  return {
    images,
    isLoading,
  };
};
