import { iState } from './interfaces';

const initial: iState = {
	comments: '',
	ratings: {
		'Back Leg Stiffness': null,
		'Lack of Playfulness': null,
		'Touch Sensitivity': null,
		'Applying Back Pressure': null,
		'Touch Avoidance': null,
	},
	dayRating: 1,
	treatments: {
		'treatmentOne': false,
		'treatmentTwo': false,
		'treatmentThree': false,
	}
};

export default initial;