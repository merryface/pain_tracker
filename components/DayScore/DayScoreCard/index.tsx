import DayScoreCard from './DayScoreCard';
import useDay from '../../../data/hooks/useDay';
interface Props {

};

const ConnectedDayScoreCard = ({}: Props): JSX.Element => {
	const { treatments } = useDay();

	return (
		<DayScoreCard treatments={ treatments } />
	);
};

export default ConnectedDayScoreCard;
