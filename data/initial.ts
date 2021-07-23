import { iState } from './interfaces';

const initial: iState = {
	days: {
		1625825393173: {
			id: 1625825393173,
			comments: '',
			ratings: {
				'Back Leg Stiffness': 1,
				'Lack of Playfulness': 1,
				'Touch Sensitivity': 1,
				'Applying Back Pressure': 1,
				'Touch Avoidance': 1,
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
				'Back Leg Stiffness': 3,
				'Lack of Playfulness': 3,
				'Touch Sensitivity': 3,
				'Applying Back Pressure': 3,
				'Touch Avoidance': 3,
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