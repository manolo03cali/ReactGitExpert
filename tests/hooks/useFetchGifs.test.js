import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Se define una suite de pruebas para el hook useFetchGifs
describe("Pruebas en hook useFetchGifs", () => {
  // Primera prueba: Verificar el estado inicial del hook
  test("Debe de regresar el estado inicial", () => {
    // Se ejecuta el hook con el valor "One Punch" usando renderHook
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Se extraen las propiedades del resultado
    const { images, isLoading } = result.current;

    // Se espera que la lista de imágenes esté vacía al inicio
    expect(images.length).toBe(0);

    // Se espera que isLoading sea true, indicando que está cargando datos
    expect(isLoading).toBeTruthy();
  });

  // Segunda prueba: Verificar que el hook retorne imágenes y que isLoading sea false después de la carga
  test("Debe de retornar un arreglo de imágenes y el isLoading en false", async () => {
    // Se ejecuta el hook nuevamente con el valor "One Punch"
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Se espera de forma asíncrona hasta que el array de imágenes tenga al menos un elemento
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    // Se extraen las propiedades actualizadas del resultado
    const { images, isLoading } = result.current;

    // Se espera que ahora haya imágenes en el array
    expect(images.length).toBeGreaterThan(0);

    // Se espera que isLoading sea false, indicando que ya terminó de cargar
    expect(isLoading).toBeFalsy();
  });
});
