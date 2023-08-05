import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionTable from "./transactionTable";
import mockFilteredData from "../assets/json/mockFilteredData.json";
test("renders Loading...", async () => {
  render(
    <TransactionTable
      headers={["Name", "Jan", "Feb", "Mar", "Total"]}
      data={mockFilteredData}
    />
  );

  const headerCells = screen.getAllByTestId("header-cell");
  expect(headerCells[1]).toHaveTextContent("Jan");
  expect(headerCells[2]).toHaveTextContent("Feb");
  expect(headerCells[3]).toHaveTextContent("Mar");

  const transactionTable = screen.getByTestId("transaction-table");
  expect(transactionTable).toBeInTheDocument();

  const cellValues = screen.getAllByTestId("cell");
  expect(cellValues[4]).toHaveTextContent(150);
});
