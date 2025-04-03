// Importa React para poder usar JSX y los componentes de React
import React from "react";

// Importa jest-dom para extender Jest con funcionalidades adicionales
import "@testing-library/jest-dom";

// Importa funciones de testing de React Testing Library
import { fireEvent, render, screen } from "@testing-library/react";

// Importa el componente principal que se va a probar
import { GifExpertApp } from "../src/GifExpertApp";

// Definir un conjunto de pruebas para el componente <GifExpertApp />
describe("Pruebas en <GifExpertApp />", () => {
  // Prueba 1: Verifica que el título "GifExpertApp" se renderiza correctamente
  test("Debe mostrar el título correctamente", () => {
    render(<GifExpertApp />); // Renderiza el componente
    expect(screen.getByText("GifExpertApp")).toBeInTheDocument(); // Verifica que el título existe en el DOM
  });

  // Prueba 2: Verifica que la categoría inicial "One Punch" aparece en la lista
  test("Debe mostrar la categoría inicial 'One Punch'", () => {
    render(<GifExpertApp />); // Renderiza el componente
    expect(screen.getByText("One Punch")).toBeInTheDocument(); // Comprueba que la categoría inicial está en el DOM
  });

  // Prueba 3: Verifica que se puede agregar una nueva categoría
  test("Debe agregar una nueva categoría", () => {
    render(<GifExpertApp />); // Renderiza el componente

    const input = screen.getByRole("textbox"); // Captura el campo de texto del formulario
    const form = screen.getByRole("form"); // Captura el formulario donde se ingresan nuevas categorías

    // Simula que el usuario escribe "Dragon Ball" en el input
    fireEvent.change(input, { target: { value: "Dragon Ball" } });

    // Simula que el usuario envía el formulario
    fireEvent.submit(form);

    //screen.debug(); // Muestra el estado del DOM en la consola (útil para depuración)

    // Verifica que "Dragon Ball" ahora aparece en la lista de categorías
    expect(screen.getByText("Dragon Ball")).toBeInTheDocument();
  });

  // Prueba 4: Verifica que no se pueden agregar categorías duplicadas
  test("No debe agregar una categoría si ya existe", () => {
    render(<GifExpertApp />); // Renderiza el componente

    const input = screen.getByRole("textbox"); // Captura el campo de texto
    const form = screen.getByRole("form"); // Captura el formulario

    // Intenta agregar "One Punch" nuevamente (ya existe en la lista inicial)
    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    // Obtiene todos los elementos que tienen el texto "One Punch" en el DOM
    const items = screen.getAllByText("One Punch");

    // Comprueba que solo existe una instancia de "One Punch" (no se duplicó)
    expect(items.length).toBe(1);
  });
});
