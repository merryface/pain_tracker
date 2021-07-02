import { createSlice } from '@reduxjs/toolkit';
import initial from './initial';

import updateCommentReducer from './reducers/updateComment';
import updateRatingReducer from './reducers/updateRating';

const currentInputs = createSlice({
	name: 'currentInputs',
	reducers: {
		updateComment: updateCommentReducer,
		updateRating: updateRatingReducer,
	},
	initialState: initial
});

export default currentInputs.reducer;
export const {
	updateComment,
	updateRating,
} = currentInputs.actions;
