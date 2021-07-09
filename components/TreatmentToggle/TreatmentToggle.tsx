import styles from './TreatmentToggle.module.scss';

interface Props {
	label: string,
	taken: boolean,
};

const TreatmentToggle = ({ label, taken }: Props): JSX.Element => {

	return (
		<div className={ styles.container }>
			<p>{ label }</p>
			<div className={ styles.pillContainer }>
				<span className={ taken ? styles.sliderTrue : styles.sliderFalse }/>
			</div>
		</div>
	);

	// return (
	// 	<div className={ styles.container }>
	// 		<p>{ label }</p>
	// 		<label className={styles.pillContainer}>
	// 			<input className={ styles.checkbox } type="checkbox" />
	// 			<span className={ styles.slider }/>
	// 		</label>
	// 	</div>
	// );
};

export default TreatmentToggle;
