import { useState } from "react";

// Componente funcional AddCategory
// Se encarga de recibir un input del usuario y enviarlo al componente padre (GifExpertApp)
export const AddCategory = ({ onNewCategory }) => {
  // Estado local para almacenar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Maneja el cambio en el input cuando el usuario escribe
  const onInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

  // Maneja el envío del formulario cuando el usuario presiona "Enter"
  const onSubmit = (e) => {
    e.preventDefault(); // Evita el recargo de la página

    // Validamos que el input no esté vacío o tenga solo un carácter
    if (inputValue.trim().length <= 1) return;

    // Llamamos a la función recibida por props, enviando el nuevo valor
    onNewCategory(inputValue.trim());

    // Limpiamos el input después de enviar la categoría
    setInputValue("");
  };

  return (
    // Formulario que ejecuta onSubmit al presionar "Enter"
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue} // Controlamos el valor del input con el estado
        onChange={onInputChange} // Detecta cambios en el input
      />
    </form>
  );
};
