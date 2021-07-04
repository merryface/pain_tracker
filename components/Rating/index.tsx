import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { updateRating } from '../../data/reducer';
import { iRating, iState } from '../../data/interfaces';

interface Props {
	title: string
};

const ConnectedRating = ({ title }: Props): JSX.Element => {
	const current = useSelector((state: iState) => title in state.ratings ? state.ratings[title] : null);

	const dispatch = useDispatch();

	const handleClick = ({ rating, title }: iRating) => {
		dispatch(updateRating({
			rating,
			title
		}))
	};

	return (
		<Rating
			title={ title }
			current={ current }
			handleClick={ handleClick }
		/>
	);
};

export default ConnectedRating;
