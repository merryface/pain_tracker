import { PayloadAction } from '@reduxjs/toolkit';
import { iState } from '../interfaces';

const updateComment = (state: iState, action: PayloadAction<string>) => {
	state.comments = action.payload;
};

export default updateComment;