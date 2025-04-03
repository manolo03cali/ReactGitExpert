import React from "react";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url = "http://one-punch.com/saitama.jpg";
  test("Debe mostrar match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    //Nos permite ver el sujeto de pruebas en consola
    //screen.debug();
    //console.log(screen.getByRole("img").alt);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    //para evaluar varias propiedades podemos desestructurar lo obtenido con el getbyrole
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
