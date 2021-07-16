export type iState = {
	days: Record<number, iDay>
};

export type iDay = {
	id: number,
	comments: string,
	ratings: Record<string, iScale>
	treatments: Record<string, iTreatment>
}

export type iScale = 1|2|3|4|5|null;

export interface iRating {
	title: string,
	rating: iScale,
}

export interface iTreatment {
	id: string,
	label: string,
	taken: boolean,
}