import { useRouter } from 'next/router';
import { ChangeEventHandler } from 'react';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../data/reducer';
import { selectDay } from '../../data/reducer';
import getDayFromUrl from '../../data/utils/getDayFromUrl';
import useDay from '../../data/hooks/useDay';

const ConnectedComments = (): JSX.Element => {

	const dispatch = useDispatch();

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		const input = e.currentTarget.value;
		dispatch(updateComment(input));
	};

	const day = useDay();
	const text = day.comments;

	return (
		<Comments
			text={ text }
			handleChange={ handleChange }
		/>
	);
};

export default ConnectedComments;
