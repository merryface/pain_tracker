import { ChangeEventHandler } from 'react';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../data/reducer';
import { selectDay } from '../../data/reducer';

const ConnectedComments = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		const input = e.currentTarget.value;
		dispatch(updateComment(input));
	};

	const day = useSelector(selectDay);
	const text = day.comments;

	return (
		<Comments
			text={ text }
			handleChange={ handleChange }
		/>
	);
};

export default ConnectedComments;
