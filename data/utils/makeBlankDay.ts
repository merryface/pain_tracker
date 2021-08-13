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
			1: {
				id: 1,
				label: "Leg Massage",
				taken: false,
			},
			2: {
				id: 2,
				label: "Meloxicam",
				taken: true,
			},
			3: {
				id: 3,
				label: "Gabapentin",
				taken: true,
			}
		}
	};
};

export default makeBlankDay;