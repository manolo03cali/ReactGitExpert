import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Dragon Ball");
    //console.log(gifs);
    //Esperamos que el arreglo que nos devuelve sea mayor que cero pero no prueba mi funcionalidad
    expect(gifs.length).toBeGreaterThan(0);
    //Mejoramos el test y evaluamos que el arreglo de gifs tenga la estructura del objeto \
    //gifs en la posicion cero
    expect(gifs[0]).toEqual({
      id: expect.any(String), // Evaluo el id no importa que valor sea siempre que sea un string
      title: expect.any(String), // Evaluo el titulo no importa que valor sea siempre que sea un string
      url: expect.any(String), // Evaluo la url no importa que valor sea siempre que sea un string
    });
  });
});
