import { useState } from "react";
//importaciones multiples realizadas con un index.js incluido en el directorio components
import { AddCategory, GifGrid } from "./components";

// Componente principal de la aplicación
// Se encarga de gestionar las categorías y mostrar la lista de GIFs
export const GifExpertApp = () => {
  // Estado que almacena la lista de categorías
  const [categories, setCategories] = useState(["One Punch"]);

  // Función para agregar una nueva categoría
  const onAddCategory = (newCategory) => {
    // Verifica si la categoría ya existe en la lista (para evitar duplicados)
    if (categories.includes(newCategory)) return;

    // Agrega la nueva categoría al inicio del arreglo
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
