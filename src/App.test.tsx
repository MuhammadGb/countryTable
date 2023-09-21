import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders react material ui", () => {
  render(<App />);
  const element = screen.getAllByText(/React country table/i);
  expect(element).toHaveLength(2);
});
