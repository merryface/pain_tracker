import styles from './TreatmentPill.module.scss';

interface Props {
	colour: string
	given: boolean
};

	const TreatmentPill = ({ colour, given = false }: Props): JSX.Element => {
	return (
		<div
			className={ styles.pill }
			style={ given ? {background: colour} : {background: '#c3c3c3'} }
		/>
	);
};

export default TreatmentPill;
