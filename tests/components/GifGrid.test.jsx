// Importación de React (aunque en versiones recientes de React no es obligatorio importar React en cada archivo JSX)
import React from "react";

// Importación de funciones de testing-library para renderizar componentes y acceder a elementos en pantalla
import { render, screen } from "@testing-library/react";

// Importación del componente a probar
import { GifGrid } from "../../src/components/GifGrid";

// Importación del hook personalizado que se usa en GifGrid
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Mockeamos el hook useFetchGifs para evitar llamadas reales a la API y controlar su salida en las pruebas
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid/>", () => {
  // Definimos una categoría de prueba
  const category = "One Punch";

  test("Debe de mostrar el loading inicialmente", () => {
    // Simulamos que useFetchGifs devuelve un estado inicial de carga
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // Renderizamos el componente con la categoría de prueba
    render(<GifGrid category={category} />);

    // screen.debug(); // Descomentar para visualizar el estado actual del DOM en la prueba

    // Verificamos que el texto "Cargando..." aparece en pantalla
    expect(screen.getByText("Cargando..."));

    // Verificamos que la categoría se muestra en pantalla
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imágenes en useFetchGifs", () => {
    // Creamos un conjunto de datos simulados para los GIFs
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "http://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "http://localhost/goku.jpg",
      },
    ];

    // Simulamos que useFetchGifs devuelve estos GIFs y que ya no está cargando
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    // Renderizamos el componente con la categoría de prueba
    render(<GifGrid category={category} />);

    // screen.debug(); // Descomentar para visualizar el estado actual del DOM en la prueba

    // Verificamos que se rendericen exactamente dos imágenes (las del array `gifs`)
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
