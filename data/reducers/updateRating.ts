import { PayloadAction } from '@reduxjs/toolkit';
import { iState, iRating } from '../interfaces';

const updateRating = (state: iState, action: PayloadAction<iRating>) => {
	state.ratings[action.payload.title] = action.payload.rating;
};

export default updateRating;