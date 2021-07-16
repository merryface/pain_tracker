import { PayloadAction } from '@reduxjs/toolkit';
import { iState } from '../interfaces';

const updateComment = (state: iState, action: PayloadAction<string>) => {
	const daysArray = Object.values(state.days);
	const day = daysArray[0];
	
	day.comments = action.payload;
};

export default updateComment;