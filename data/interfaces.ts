export interface iState {
	comments: string,
	ratings: Record<string, iScale>
};

export type iScale = 1|2|3|4|5|null;

export interface iRating {
	title: string,
	rating: iScale,
}