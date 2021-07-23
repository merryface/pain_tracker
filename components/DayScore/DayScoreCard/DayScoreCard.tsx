import styles from './DayScoreCard.module.scss';
import Score from '../Score';
import TreatmentPill from '../TreatmentPill';
import { iTreatment } from '../../../data/interfaces';

interface Props {
	treatments: Record<string, iTreatment>
};

const DayScoreCard = ({ treatments }: Props): JSX.Element => {

	return (
		<div className = { styles.container }>
			<h2 className={ styles.title }>Today's Score</h2>
			<div className = { styles.scoreContainer }>
				<Score />
				<div className = { styles.pillsContainer }>
					<TreatmentPill
					colour = { "green" }
					given = { treatments["treatmentOne"]["taken"] }
					/>
					<TreatmentPill
					colour = { "red" }
					given = { treatments["treatmentTwo"]["taken"] }
					/>
					<TreatmentPill
					colour = { "blue" }
					given = { treatments["treatmentThree"]["taken"] }
					/>
				</div>
			</div>
		</div>
	);
};

export default DayScoreCard;
