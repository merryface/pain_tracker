import styles from './TreatmentToggle.module.scss';

interface Props {

};

const TreatmentToggle = ({  }: Props): JSX.Element => {
	return (
		<label className={styles.container}>
			<input className={   styles.checkbox } type="checkbox" />
			<span className={ styles.slider }/>
		</label>
	);
};

export default TreatmentToggle;
