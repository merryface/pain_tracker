import { createSlice } from '@reduxjs/toolkit';
import initial from './initial';

import updateCommentReducer from './reducers/updateComment';

const currentInputs = createSlice({
	name: 'currentInputs',
	reducers: {
		updateComment: updateCommentReducer
	},
	initialState: initial
});

export default currentInputs.reducer;
export const {
	updateComment,
} = currentInputs.actions;
