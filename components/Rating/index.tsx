import { useDispatch } from 'react-redux';
import Rating from './Rating';
import { updateRating } from '../../data/reducer';
import { iRating } from '../../data/interfaces';
import useDay from '../../data/hooks/useDay';
interface Props {
	title: string
};

const ConnectedRating = ({ title }: Props): JSX.Element => {
	const day = useDay();

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
