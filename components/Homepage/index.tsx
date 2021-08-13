import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Homepage from './Homepage';

import useDay from '../../data/hooks/useDay';
import { createDay } from '../../data/reducer';
import getDayFromUrl from '../../data/utils/getDayFromUrl';

const ConnectedHomepage = () => {
	const day = useDay();

	const dispatch = useDispatch();


	const router = useRouter();

	const dayId = getDayFromUrl(router.query.day);

	useEffect(() => {
		if (dayId !== null) {
			dispatch(createDay(dayId));
		}
	}, [dayId]);

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