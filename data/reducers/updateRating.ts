import { PayloadAction } from '@reduxjs/toolkit';
import { iState, iRating } from '../interfaces';
import createDay from './createDay';

interface iAction {
	rating: iRating,
	dayId: number,
};

const updateRating = (state: iState, action: PayloadAction<iAction>) => {
	const day = state.days[action.payload.dayId];

	if (!day) {
		createDay(state, {
			type: 'createDay',
			payload: action.payload.dayId
		});
	}

	day.ratings[action.payload.rating.title] = action.payload.rating.rating;
};

export default updateRating;