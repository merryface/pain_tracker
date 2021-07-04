import Score from './Score';
import { useSelector } from 'react-redux';
import { iState } from '../../../data/interfaces';

const sum = (obj: any) => {
  let sum = 0;
  for( let val in obj ) {
    if(obj[val]) {
      sum += obj[val];
    };
  }
  return sum;
}

const ratingsSet = (obj: any) => {
  let ratingsSet = 0;

  for (let i = 0; i < obj.length; i +=1) {
    if (obj[i] != null) {
      ratingsSet += 1
    }
  }

  return ratingsSet;
}

const ConnectedScore = () => {
  const ratings = useSelector((state: iState) => state.ratings);
  const rating = sum(ratings) <= 1 ? 1 : sum(ratings)/5;

  return (
    <Score DayScore = { rating } />
  );
};

export default ConnectedScore;