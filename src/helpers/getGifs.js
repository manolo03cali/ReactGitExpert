// Función asíncrona que obtiene GIFs desde la API de Giphy según una categoría dada
export const getGifs = async (category) => {
  // Construcción de la URL de la API con la categoría proporcionada y un límite de 10 resultados
  const url = `https://api.giphy.com/v1/gifs/search?api_key=nIjuxTHKWFWIsfYrLQkgif9p2CKE3TJV&q=${category}&limit=10`;

  // Realiza la solicitud HTTP a la API de Giphy y espera la respuesta
  const resp = await fetch(url);

  // Convierte la respuesta en un objeto JSON y extrae la propiedad 'data'
  const { data } = await resp.json();

  // Mapea los datos obtenidos para extraer solo la información relevante de cada GIF
  const gifs = data.map((img) => ({
    id: img.id, // ID único del GIF
    title: img.title, // Título del GIF
    url: img.images.downsized_medium.url, // URL de la imagen en tamaño mediano
  }));

  // Muestra en consola los GIFs obtenidos (comentado para evitar spam en consola)
  // console.log(gifs);

  // Retorna el array de objetos con los GIFs filtrados y estructurados
  return gifs;
};
