import Score from './Score';
import useDay from '../../../data/hooks/useDay';
import ratingAverage from '../../../data/utils/ratingAverage';

const ConnectedScore = () => {
  const {ratings} = useDay();
  const rating = ratingAverage(ratings);

  return (
    <Score dayScore = { rating } />
  );
};

export default ConnectedScore;