import styles from './DayScoreCard.module.scss';
import Score from '../Score';
import TreatmentPill from '../TreatmentPill';
import { useSelector } from 'react-redux';
import { iState } from '../../../data/interfaces';


interface Props {

};

const DayScoreCard = ({ }: Props): JSX.Element => {
	const treatments = useSelector((state: iState) => state.treatments);


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
