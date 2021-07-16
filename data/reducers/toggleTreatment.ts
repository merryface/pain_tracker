import { iState } from "../interfaces";
import { PayloadAction } from '@reduxjs/toolkit';

const toggleTreatment = (state: iState, {payload: {dayId, treatmentId}}: PayloadAction<{dayId: number, treatmentId: string}>) => {
  state.days[dayId].treatments[treatmentId].taken = !state.days[dayId].treatments[treatmentId].taken;
};

export default toggleTreatment;