export interface iState {
	comments: string,
	ratings: Record<string, iScale>
	treatments: Record<string, iTreatment>
};

export type iScale = 1|2|3|4|5|null;

export interface iRating {
	title: string,
	rating: iScale,
}

export interface iTreatment {
	label: string,
	taken: boolean,
}