const getDayFromUrl = (day: string[] | string | undefined) => {
	if (Array.isArray(day)) {
		return +day[0];
	} else if (day === undefined) {
		return null
	} else {
		return +day;
	}
};

export default getDayFromUrl;