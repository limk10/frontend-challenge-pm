export const formatBrazillianMoney = (number = 0) => {
  return `R$ ${number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};
