import React from "react";
import { useState } from "react";
// Importaciones múltiples realizadas con un index.js incluido en el directorio "components"
import { AddCategory, GifGrid } from "./components";

// Componente principal de la aplicación
// Se encarga de gestionar las categorías y mostrar la lista de GIFs
export const GifExpertApp = () => {
  // Estado que almacena la lista de categorías
  // Inicialmente, la aplicación comienza con "One Punch"
  const [categories, setCategories] = useState(["One Punch"]);

  // Función para agregar una nueva categoría a la lista
  const onAddCategory = (newCategory) => {
    // Verifica si la categoría ya existe en la lista para evitar duplicados
    if (categories.includes(newCategory)) return;

    // Agrega la nueva categoría al inicio del arreglo de categorías
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título principal de la aplicación */}
      <h1>GifExpertApp</h1>

      {/* Componente de entrada que permite agregar nuevas categorías */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Mapea la lista de categorías y renderiza un GifGrid para cada una */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
