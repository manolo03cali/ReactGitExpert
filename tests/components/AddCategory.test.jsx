// Importamos React, necesario para el uso de JSX
import React from "react";

// Importamos funciones de testing-library/react para realizar pruebas:
// - fireEvent: Para simular eventos del usuario
// - render: Para renderizar componentes en el entorno de prueba
// - screen: Para acceder a elementos renderizados
import { fireEvent, render, screen } from "@testing-library/react";

// Importamos el componente que vamos a probar
import { AddCategory } from "../../src/components/AddCategory";

// Describe agrupa pruebas relacionadas al componente <AddCategory />
describe("Pruebas al componente <AddCategory/>", () => {
  // Test para verificar que el valor del input cambia cuando el usuario escribe
  test("Debe de cambiar el valor de la caja de texto", () => {
    // 1. Renderizamos el componente AddCategory
    // Le pasamos una función vacía como prop `onNewCategory`, ya que no la necesitamos en esta prueba
    render(<AddCategory onNewCategory={() => {}} />);

    // 2. Obtenemos el elemento input usando su rol "textbox"
    const input = screen.getByRole("textbox");

    // 3. Simulamos que el usuario escribe en el input
    fireEvent.input(input, { target: { value: "saitama" } });

    // 4. Verificamos que el valor del input haya cambiado correctamente
    expect(input.value).toBe("saitama");
  });

  // Test para verificar que `onNewCategory` es llamado cuando el input tiene un valor y el formulario se envía
  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    // 1. Definimos un valor para evaluar
    const inputValue = "saitama";

    // 2. Creamos un mock de la función `onNewCategory`
    const onNewCategory = jest.fn();

    // 3. Renderizamos el componente, pasando la función mock como prop
    render(<AddCategory onNewCategory={onNewCategory} />);

    // 4. Obtenemos el input y el formulario usando `getByRole`
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // 5. Simulamos que el usuario escribe en el input
    fireEvent.input(input, { target: { value: inputValue } });

    // 6. Simulamos el envío del formulario
    fireEvent.submit(form);

    // 7. Verificamos que el input se haya vaciado después de enviar el formulario
    expect(input.value).toBe("");

    // 8. Verificamos que `onNewCategory` haya sido llamado una vez
    expect(onNewCategory).toHaveBeenCalled();

    // 9. Verificamos que `onNewCategory` haya sido llamado exactamente una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    // 10. Verificamos que `onNewCategory` haya sido llamado con el valor correcto
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  // Test para verificar que `onNewCategory` **no** es llamado si el input está vacío
  test("No debe de llamar el onNewCategory si el input está vacío", () => {
    // 1. Definimos un valor vacío para evaluar
    const inputValue = "";

    // 2. Creamos un mock de la función `onNewCategory`
    const onNewCategory = jest.fn();

    // 3. Renderizamos el componente
    render(<AddCategory onNewCategory={onNewCategory} />);

    // 4. Obtenemos el formulario
    const form = screen.getByRole("form");

    // 5. Simulamos el envío del formulario sin escribir nada en el input
    fireEvent.submit(form);

    // 6. Verificamos que `onNewCategory` no haya sido llamado
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
