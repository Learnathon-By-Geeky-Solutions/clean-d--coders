export const getCapitalCase = (str) => {
  const words = str.trim().split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
