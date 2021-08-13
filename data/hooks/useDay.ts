import { useSelector } from 'react-redux';
import { selectDay } from '../reducer';
import { useRouter } from 'next/router';
import getDayFromUrl from '../utils/getDayFromUrl';
import { iDay } from '../interfaces';
import getIdFromDate from '../utils/getIdFromDate';

const useDay = (): iDay => {
	const router = useRouter();

	const dayId = getDayFromUrl(router.query.day);
	const day = useSelector(selectDay(dayId));
	const today = useSelector(selectDay(getIdFromDate(new Date())));

	return day ? day : today;
};

export default useDay;