import { useSelector } from 'react-redux';
import { selectDay } from '../reducer';
import { useRouter } from 'next/router';
import getDayFromUrl from '../utils/getDayFromUrl';

const useDay = () => {
	const router = useRouter();

	const dayId = getDayFromUrl(router.query.day);
	const day = useSelector(selectDay(dayId));

	return day;
};

export default useDay;