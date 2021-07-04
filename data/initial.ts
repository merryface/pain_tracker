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
	treatments: {
		'treatmentOne': {
			'label': "Treatment 1",
			'taken': false,
		},
		'treatmentTwo': {
			'label': "Treatment 2",
			'taken': true,
		},
		'treatmentThree': {
			'label': "Treatment 3",
			'taken': true,
		}
	}
};

export default initial;