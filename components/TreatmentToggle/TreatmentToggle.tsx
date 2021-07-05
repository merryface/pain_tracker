import styles from './TreatmentToggle.module.scss';

interface Props {

};

const TreatmentToggle = ({  }: Props): JSX.Element => {
	return (
		<div className={ styles.container }>
			<p>Treatment 1</p>
			<label className={styles.pillContainer}>
				<input className={   styles.checkbox } type="checkbox" />
				<span className={ styles.slider }/>
			</label>
		</div>
	);
};

export default TreatmentToggle;
