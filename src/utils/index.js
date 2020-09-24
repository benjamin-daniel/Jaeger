export const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export function currencyFormat(num = 0, degree = 0) {
  return (
    '₦ ' +
    Number(num)
      .toFixed(degree)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
}
