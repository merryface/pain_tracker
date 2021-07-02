import { ChangeEventHandler } from 'react';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../data/reducer';
import { iState } from '../../data/interfaces';

const ConnectedComments = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		const input = e.currentTarget.value;
		dispatch(updateComment(input));
	};

	const text = useSelector((state: iState) => {
		return state.comments;
	});

	return (
		<Comments
			text={ text }
			handleChange={ handleChange }
		/>
	);
};

export default ConnectedComments;
