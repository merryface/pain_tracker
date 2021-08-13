import { iDay } from '../interfaces';

const makeBlankDay = (id: number): iDay => {
	return {
		id,
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
	};
};

export default makeBlankDay;