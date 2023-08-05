import React from "react";

const TransactionTable = ({ headers, data }) => {
  return (
    <table data-testid="transaction-table">
      <tbody>
        <tr>
          {headers.map((header) => (
            <th key={header} data-testid="header-cell">
              {header}
            </th>
          ))}
        </tr>
        {data.map((item) => {
          const [name, firstMon, secondMon, thirdMon] = item;
          return (
            <tr key={name}>
              <td data-testid="cell">{name}</td>
              <td data-testid="cell">{firstMon}</td>
              <td data-testid="cell">{secondMon}</td>
              <td data-testid="cell">{thirdMon}</td>
              <td data-testid="cell">{firstMon + secondMon + thirdMon}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionTable;
