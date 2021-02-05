export function Currency(money: number) {
  return new Intl.NumberFormat("Th", {
    style: "currency",
    currency: "THB",
  }).format(money);
}
export default Currency;
