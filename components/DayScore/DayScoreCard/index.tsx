import DayScoreCard from './DayScoreCard';
import useDay from '../../../data/hooks/useDay';
interface Props {

};

const ConnectedDayScoreCard = ({ }: Props): JSX.Element => {
	const { treatments, id } = useDay();

	return (
		<DayScoreCard
			treatments={ treatments }
			id={ id }
		/>
	);
};

export default ConnectedDayScoreCard;
