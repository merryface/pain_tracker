import { iState } from './interfaces';
import getIdFromDate from './utils/getIdFromDate';
import makeBlankDay from './utils/makeBlankDay';

const todayID = getIdFromDate(new Date());
const today = makeBlankDay(todayID);

const initial: iState = {
	days: {
		[todayID]: today
	}
};

export default initial;