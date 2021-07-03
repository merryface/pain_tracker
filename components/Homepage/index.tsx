import { useSelector } from 'react-redux';

import Homepage from './Homepage';
import { iState } from '../../data/interfaces';

const ConnectedHomepage = () => {
	const ratings = useSelector((state: iState) => Object.keys(state.ratings));
	return (
		<Homepage
			ratings={ ratings }
		/>
	)
}

export default ConnectedHomepage;