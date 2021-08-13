import styles from './DayScoreCard.module.scss';
import Score from '../Score';
import TreatmentPill from '../TreatmentPill';
import { iTreatment } from '../../../data/interfaces';
import getIdFromDate from '../../../data/utils/getIdFromDate';

interface Props {
	treatments: Record<number, iTreatment>,
	id: number,
};

const DayScoreCard = ({ treatments, id }: Props): JSX.Element => {

	const title = getIdFromDate(new Date()) === id ? `Today's Score` :
		(new Date(id)).toLocaleDateString();

	return (
		<div className = { styles.container }>
			<h2 className={ styles.title }>{ title }</h2>
			<div className = { styles.scoreContainer }>
				<Score />
				<div className = { styles.pillsContainer }>
					<TreatmentPill
					colour = { "green" }
					given = { treatments[1]["taken"] }
					/>
					<TreatmentPill
					colour = { "red" }
					given = { treatments[2]["taken"] }
					/>
					<TreatmentPill
					colour = { "blue" }
					given = { treatments[3]["taken"] }
					/>
				</div>
			</div>
		</div>
	);
};

export default DayScoreCard;
