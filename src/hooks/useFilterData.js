import { useMemo } from "react";
import { getMonthsInRange, calcPoints, months } from "../utility/utils";

export const useFilterData = (transactionData, startYear, startMonth) => {
  const monthsInRange = getMonthsInRange(startMonth);

  const pointsData = transactionData.reduce((prev, curr) => {
    const curMonth = months[new Date(curr.date).getMonth()];
    const curYear = new Date(curr.date).getFullYear();
    return {
      ...prev,
      [curr.name]: {
        ...prev[curr.name],
        [curMonth]:
          curYear !== startYear
            ? 0
            : ((prev[curr.name] && prev[curr.name][curMonth]) || 0) +
              calcPoints(curr.amount),
      },
    };
  }, {});

  const res = useMemo(
    () =>
      Object.keys(pointsData).reduce((prev, curr) => {
        const points = monthsInRange.map(
          (month) => pointsData[curr][month] || 0
        );
        return [...prev, [curr, ...points]];
      }, []),
    [transactionData]
  );
  return res;
};
