import { useRouter } from 'next/router';
import { ChangeEventHandler } from 'react';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../data/reducer';
import { selectDay } from '../../data/reducer';
import getDayFromUrl from '../../data/utils/getDayFromUrl';

const ConnectedComments = (): JSX.Element => {

	const dispatch = useDispatch();

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		const input = e.currentTarget.value;
		dispatch(updateComment(input));
	};

	const router = useRouter();
	const dayId = getDayFromUrl(router.query.day);
	const day = useSelector(selectDay(dayId));
	const text = day.comments;

	return (
		<Comments
			text={ text }
			handleChange={ handleChange }
		/>
	);
};

export default ConnectedComments;
