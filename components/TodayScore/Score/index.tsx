import Score from './Score';
import { useSelector } from 'react-redux';

const ConnectedScore = () => {
  
  return (
    <Score todayScore = {2} />
  );
};

export default ConnectedScore;