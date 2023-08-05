import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { act } from "react-test-renderer";

test("renders Loading...", async () => {
  render(<Home />);
  const caption = screen.getByText(/Customer Transaction Points/i);
  expect(caption).toBeInTheDocument();

  act(() => {
    const fetchButton = screen.getByTestId("fetch-button");
    fireEvent.click(fetchButton);
  });

  const loadingSpinner = screen.getByTestId("loading-spinner");
  expect(loadingSpinner).toBeInTheDocument();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const transactionTable = screen.getByTestId("transaction-table");
  expect(transactionTable).toBeInTheDocument();
});
