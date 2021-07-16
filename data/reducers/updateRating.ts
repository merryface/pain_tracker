import { PayloadAction } from '@reduxjs/toolkit';
import { iState, iRating } from '../interfaces';

const updateRating = (state: iState, action: PayloadAction<iRating>) => {
	const daysArray = Object.values(state.days);
	const day = daysArray[0];

	day.ratings[action.payload.title] = action.payload.rating;
};

export default updateRating;