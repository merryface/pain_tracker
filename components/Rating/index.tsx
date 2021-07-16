import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { selectDay, updateRating } from '../../data/reducer';
import { iRating } from '../../data/interfaces';

interface Props {
	title: string
};

const ConnectedRating = ({ title }: Props): JSX.Element => {
	const day = useSelector(selectDay);
	const currentRating = title in day.ratings ? day.ratings[title] : null;

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
			current={ currentRating }
			handleClick={ handleClick }
		/>
	);
};

export default ConnectedRating;
