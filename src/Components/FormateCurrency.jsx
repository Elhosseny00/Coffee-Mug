const FORMATER_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const formatCurrency = (number) => {
  return FORMATER_CURRENCY.format(number);
};
export default formatCurrency;
