import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import TreatmentToggle from './TreatmentToggle';

import { toggleTreatment } from '../../data/reducer';
import useDay from '../../data/hooks/useDay';

interface Props {
	id: string
};

const ConnectedTreatmentToggle = ({id}: Props): JSX.Element => {
	const day = useDay();
	const treatment = day.treatments[id];

	const dispatch = useDispatch();
	const handleClick: MouseEventHandler = () => {
		dispatch(toggleTreatment({
			dayId: day.id,
			treatmentId: treatment.id,
		}));
	}

	return (
		<TreatmentToggle
			label={ treatment.label }
			taken={ treatment.taken }
			handleClick = { handleClick }
		/>
	);
};

export default ConnectedTreatmentToggle;
