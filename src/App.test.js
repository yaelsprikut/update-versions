import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Update your package link", () => {
  render(<App />);
  const linkElement = screen.getByText(/classical music plays/i);
  expect(linkElement).toBeInTheDocument();
});
