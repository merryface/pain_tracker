// Import Tools
import { createSlice } from '@reduxjs/toolkit';
import initial from './initial';
import { iState } from './interfaces';
// --------------------------------
// Import Reducers
import updateCommentReducer from './reducers/updateComment';
import updateRatingReducer from './reducers/updateRating';
import toggleTreatmentReducer from './reducers/toggleTreatment';
import previousPageReducer from './reducers/previousPage';


const currentInputs = createSlice({
	name: 'currentInputs',
	reducers: {
		updateComment: updateCommentReducer,
		updateRating: updateRatingReducer,
		toggleTreatment: toggleTreatmentReducer,
		previousPage: previousPageReducer
	},
	initialState: initial
});

export default currentInputs.reducer;
export const {
	updateComment,
	updateRating,
	toggleTreatment,
	previousPage,
} = currentInputs.actions;

export const selectDay = (state: iState) => {
	const daysArray = Object.values(state.days);
	return daysArray[state.currentDay];
}

export const currentDay = (state: iState) => state.currentDay;
