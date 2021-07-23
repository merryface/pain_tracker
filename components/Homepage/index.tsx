import Homepage from './Homepage';

import useDay from '../../data/hooks/useDay';

const ConnectedHomepage = () => {
	const day = useDay();
	const ratings = Object.keys(day.ratings);
	const treatments = Object.keys(day.treatments);

	return (
		<Homepage
			ratings={ ratings }
			treatments={ treatments }
		/>
	)
}

export default ConnectedHomepage;