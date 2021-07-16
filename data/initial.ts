import { iState } from './interfaces';

const initial: iState = {
	days: {
		1625825393173: {
			id: 1625825393173,
			comments: '',
			ratings: {
				'Back Leg Stiffness': null,
				'Lack of Playfulness': null,
				'Touch Sensitivity': null,
				'Applying Back Pressure': null,
				'Touch Avoidance': null,
			},
			treatments: {
				treatmentOne: {
					id: 'treatmentOne',
					label: "Leg Massage",
					taken: false,
				},
				treatmentTwo: {
					id: 'treatmentTwo',
					label: "Meloxicam",
					taken: true,
				},
				treatmentThree: {
					id: 'treatmentThree',
					label: "Gabapentin",
					taken: true,
				}
			}
		},

		1628829393173: {
			id: 1628829393173,
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
					id: 'treatmentOne',
					label: "Treatment 1",
					taken: false,
				},
				'treatmentTwo': {
					id: 'treatmentTwo',
					label: "Treatment 2",
					taken: true,
				},
				'treatmentThree': {
					id: 'treatmentThree',
					label: "Treatment 3",
					taken: true,
				}
			}
		}
	}
};

export default initial;