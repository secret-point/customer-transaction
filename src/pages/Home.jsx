import React, { useState, useCallback } from "react";
import mockTransactionData from "../assets/json/mockTransactionData.json";
import TransactionTable from "../components/transactionTable";
import { getMonthsInRange, months } from "../utility/utils";
import { useFilterData } from "../hooks/useFilterData";

const Home = () => {
  const [transactionData, setTransactionData] = useState();
  const [startMonth, setStartMonth] = useState(0);
  const [startYear, setStartYear] = useState(2020);
  const filteredData = useFilterData(
    transactionData || [],
    startYear,
    startMonth
  );
  const fetchTransactionData = useCallback(() => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const transData = await mockTransactionData;
          resolve(transData);
        } catch (e) {
          reject(e);
        }
      }, 2000);
    });
  }, []);

  const handleFetch = useCallback(() => {
    setTransactionData([]);
    fetchTransactionData().then((res) => setTransactionData(res));
  }, []);
  return (
    <>
      <h1>Customer Transaction Points</h1>
      <h2>Choose date</h2>
      <div className="transaction--wrapper">
        <div>
          <label htmlFor="start-date">Start Date : </label>
          <select
            id="months"
            value={startYear}
            onChange={(e) => {
              setStartYear(Number(e.target.value));
              setStartMonth(0);
            }}
          >
            <option value={2020} label={2020} />
            <option value={2021} label={2021} />
            <option value={2022} label={2022} />
          </select>
          <label> year </label>
          <select
            id="months"
            value={startMonth}
            onChange={(e) => setStartMonth(Number(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={month} value={index} label={month} />
            ))}
          </select>
          <label> month </label>
          <button data-testid="fetch-button" onClick={handleFetch}>
            Fetch
          </button>
        </div>

        {filteredData?.length ? (
          <TransactionTable
            headers={["Name", ...getMonthsInRange(startMonth), "Total"]}
            data={filteredData}
          />
        ) : (
          transactionData && (
            <div data-testid="loading-spinner" className="loader" />
          )
        )}
      </div>
    </>
  );
};

export default Home;
