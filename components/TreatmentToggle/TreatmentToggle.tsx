import styles from './TreatmentToggle.module.scss';
import { MouseEventHandler } from 'react';

interface Props {
	label: string,
	taken: boolean,
	handleClick:  MouseEventHandler
};

const TreatmentToggle = ({ label, taken, handleClick }: Props): JSX.Element => {

	// TODO: Add key event listener to give a keyboard event to toggle switch

	return (
		<div className={ styles.container } onClick= { handleClick } role="checkbox" aria-checked={ taken } tabIndex={0}>
			<p>{ label }</p>
			<div className={ styles.pillContainer }>
				<span className={ taken ? styles.sliderTrue : styles.sliderFalse }/>
			</div>
		</div>
	);
};

export default TreatmentToggle;
