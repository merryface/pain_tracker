import { PayloadAction } from '@reduxjs/toolkit';
import { iState } from '../interfaces';

const previousPageReducer = (state: iState, action: PayloadAction<number>) => {
  state.currentDay = action.payload;
};

export default previousPageReducer;