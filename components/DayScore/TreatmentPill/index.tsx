import TreatmentPill from './TreatmentPill';

interface Props {
	given: boolean,
	colour: string
};

const ConnectedTreatmentPill = ({given, colour}: Props): JSX.Element => {
	return (
		<TreatmentPill
			colour = { colour }
			given = { given }
		/>
	);
};

export default ConnectedTreatmentPill;
