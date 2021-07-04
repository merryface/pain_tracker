import styles from './DayScoreCard.module.scss';
import Score from '../Score';
import TreatmentPill from '../TreatmentPill';

interface Props {

};

const DayScoreCard = ({ }: Props): JSX.Element => {
	return (
		<div>
			<Score />
			{/* Score */}
			<div>
			{/* x3 pills */}
			</div>
		</div>
	);
};

export default DayScoreCard;
