import { createSlice } from '@reduxjs/toolkit';
import initial from './initial';
import { iState } from './interfaces';

import updateCommentReducer from './reducers/updateComment';
import updateRatingReducer from './reducers/updateRating';
import toggleTreatmentReducer from './reducers/toggleTreatment';

const currentInputs = createSlice({
	name: 'currentInputs',
	reducers: {
		updateComment: updateCommentReducer,
		updateRating: updateRatingReducer,
		toggleTreatment: toggleTreatmentReducer,
	},
	initialState: initial
});

export default currentInputs.reducer;
export const {
	updateComment,
	updateRating,
	toggleTreatment,
} = currentInputs.actions;

export const selectDay = (state: iState) => {
	const daysArray = Object.values(state.days);
	return daysArray[0];
}
