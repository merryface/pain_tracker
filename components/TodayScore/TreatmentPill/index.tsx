import TreatmentPill from './TreatmentPill';

interface Props {

};

const ConnectedTreatmentPill = ({}: Props): JSX.Element => {
	return (
		<TreatmentPill
			colour = { "red" }
			given = { false }
		/>
	);
};

export default ConnectedTreatmentPill;
