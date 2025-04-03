// Importamos React para poder utilizar JSX
import React from "react";

// Importamos PropTypes para validar las propiedades del componente
import PropTypes from "prop-types";

// Importamos useState para manejar el estado local del componente
import { useState } from "react";

// Componente funcional AddCategory
// Se encarga de recibir un input del usuario y enviarlo al componente padre (GifExpertApp)
export const AddCategory = ({ onNewCategory }) => {
  // Estado local para almacenar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Función que maneja el cambio en el input cuando el usuario escribe
  const onInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

  // Función que maneja el envío del formulario cuando el usuario presiona "Enter"
  const onSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validamos que el input no esté vacío o tenga solo un carácter
    if (inputValue.trim().length <= 1) return;

    // Llamamos a la función recibida por props, enviando el nuevo valor
    onNewCategory(inputValue.trim());

    // Limpiamos el input después de enviar la categoría
    setInputValue("");
  };

  return (
    // Formulario que ejecuta onSubmit al presionar "Enter"
    // El atributo aria-label permite identificar el formulario en pruebas automatizadas
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs" // Texto de ayuda dentro del input
        value={inputValue} // Controlamos el valor del input con el estado
        onChange={onInputChange} // Detecta cambios en el input y actualiza el estado
      />
    </form>
  );
};

// Validación de props usando PropTypes
// Indica que onNewCategory es una función requerida
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
