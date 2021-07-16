import { selectDay } from '../../data/reducer';
import TreatmentToggle from './TreatmentToggle';
import { useSelector, useDispatch } from 'react-redux';
import { MouseEventHandler } from 'react';
import { toggleTreatment } from '../../data/reducer';

interface Props {
	id: string
};

const ConnectedTreatmentToggle = ({id}: Props): JSX.Element => {
	const day = useSelector(selectDay);
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
