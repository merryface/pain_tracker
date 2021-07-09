import Score from './Score';
import { useSelector } from 'react-redux';
import { iState, iScale } from '../../../data/interfaces';
import ratingAverage from '../../../data/utils/ratingAverage';

const ConnectedScore = () => {
  const ratings = useSelector((state: iState) => state.ratings);
  const rating = ratingAverage(ratings);

  return (
    <Score dayScore = { rating } />
  );
};

export default ConnectedScore;