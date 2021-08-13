import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Homepage from './Homepage';

import useDay from '../../data/hooks/useDay';
import { createDay } from '../../data/reducer';

const ConnectedHomepage = () => {
	const day = useDay();

	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(createDay(day.id));
	}, [day]);

	const ratings = Object.keys(day.ratings ?? {});
	const treatments = Object.keys(day.treatments ?? {});

	return (
		<Homepage
			ratings={ ratings }
			treatments={ treatments }
		/>
	)
}

export default ConnectedHomepage;