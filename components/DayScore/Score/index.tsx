import Score from './Score';
import { useSelector } from 'react-redux';

const ConnectedScore = () => {
  
  return (
    <Score DayScore = {2} />
  );
};

export default ConnectedScore;