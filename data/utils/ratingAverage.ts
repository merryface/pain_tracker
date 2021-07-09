import { iScale } from '../interfaces';

const ratingAverage = (obj: Record<string, iScale>) => {
  return Object.values(obj)
    .filter(value => value !== null)
    .reduce((accumulator, value, _, arr) => {
      if (value === null) {
        return accumulator;
      }
      return (accumulator + value/arr.length)
    }, 0);
}

export default ratingAverage;