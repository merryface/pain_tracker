export interface iState {
	comments: string,
	ratings: Record<string, iScale>
	todayRating: number,
	treatments: Record<string, boolean>
};

export type iScale = 1|2|3|4|5|null;

export interface iRating {
	title: string,
	rating: iScale,
}