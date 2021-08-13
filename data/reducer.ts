import { createSlice } from '@reduxjs/toolkit';
import initial from './initial';
import { iState } from './interfaces';

import updateCommentReducer from './reducers/updateComment';
import updateRatingReducer from './reducers/updateRating';
import toggleTreatmentReducer from './reducers/toggleTreatment';
import createDayReducer from './reducers/createDay';

const currentInputs = createSlice({
	name: 'currentInputs',
	reducers: {
		createDay: createDayReducer,
		updateComment: updateCommentReducer,
		updateRating: updateRatingReducer,
		toggleTreatment: toggleTreatmentReducer,
	},
	initialState: initial
});

export default currentInputs.reducer;
export const {
	createDay,
	updateComment,
	updateRating,
	toggleTreatment,
} = currentInputs.actions;

export const selectDay = (id: number | null) => (state: iState) => {
	if (id === null) {
		const daysArray = Object.values(state.days);

		return daysArray[0];
	}

	return state.days[id];
}
