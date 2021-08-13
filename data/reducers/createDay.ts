import { PayloadAction } from '@reduxjs/toolkit';
import { iState, iDay } from '../interfaces';
import makeBlankDay from '../utils/makeBlankDay';
import getIdFromDate from '../utils/getIdFromDate';

const createDay = (state: iState, action: PayloadAction<number>) => {
	if (state.days[action.payload]) {
		return state;
	}

	const validateDay = (id: number) => {
		const midnight = getIdFromDate(new Date(id));
		return midnight === id;
	};

	if (validateDay(action.payload)) {
		const blankDay = makeBlankDay(action.payload);

		state.days[action.payload] = blankDay;
	}

};

export default createDay;