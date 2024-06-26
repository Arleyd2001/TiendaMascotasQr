import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Home component with product gallery", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Verifica que el título de la sección se renderiza
  const sectionTitle = screen.getByText(/mascotas/i);
  expect(sectionTitle).toBeInTheDocument();

  // Verifica que las imágenes de los productos se renderizan
  const dogImage = screen.getByAltText("dog");
  const catImage = screen.getByAltText("cat");

  expect(dogImage).toBeInTheDocument();
  expect(catImage).toBeInTheDocument();

  // Verifica que los enlaces a los productos se renderizan
  const dogLink = screen.getByText("Ver Productos");
  const catLink = screen.getByText("Ver Productos");

  expect(dogLink).toBeInTheDocument();
  expect(catLink).toBeInTheDocument();
});
