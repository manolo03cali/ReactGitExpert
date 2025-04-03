import React from "react";
import { render } from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";
describe("Pruebas en el componente GitItem", () => {
  test("Test debe hacer match con snapshot", () => {
    const title = "titulo de prueba";
    const url = "http://urldeprueba.com";
    const { container } = render(<GifItem title={title} url={url} />);
    console.log(container);
    espect(container).toMachSnapchot();
  });
});
