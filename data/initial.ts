import { iState } from './interfaces';
const today = new Date().setHours(0,0,0,0);
const yesterday = today - 86400000;

const initial: iState = {
	currentDay: 1,

	days: {
		[today]: {
			id: today,
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
					taken: false,
				},
				treatmentThree: {
					id: 'treatmentThree',
					label: "Gabapentin",
					taken: false,
				}
			}
		},

		[yesterday]: {
			id: yesterday,
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