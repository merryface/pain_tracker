import { useSelector } from 'react-redux';
import Homepage from './Homepage';
import { selectDay } from '../../data/reducer';

const ConnectedHomepage = () => {
	const day = useSelector(selectDay);
	const ratings = Object.keys(day.ratings);
	const treatments= Object.keys(day.treatments);

	return (
		<Homepage
			ratings={ ratings }
			treatments={treatments}
		/>
	)
}

export default ConnectedHomepage;