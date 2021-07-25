import React from "react";
import App from './App';
import { render, screen } from "@testing-library/react";



test('renders learn react link', () => {
  const { container } = render(<App />);
  const classNamePresent = container.firstChild.classList.contains('App');
  expect(classNamePresent).toBe(true);
});
