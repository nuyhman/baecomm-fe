/**
 * 가격을 달러로 변환하는 함수
 * @param price
 * @returns
 */
export const convertToDollar = (price: number) => {
  const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  });
  return dollar.format(price);
};
