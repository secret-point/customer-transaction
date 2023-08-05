export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const calcPoints = (amount) => {
  return amount < 50 ? 0 : amount < 100 ? amount - 50 : (amount - 100) * 2 + 50;
};

export const getMonthsInRange = (startMonth) => {
  return Array.from({ length: 3 }).reduce(
    (prev, curr, index) => [...prev, months[(startMonth + index) % 12]],
    []
  );
};
