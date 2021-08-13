const getIdFromDate = (date: Date): number => {
	return date.setHours(0, 0, 0, 0);
};

export default getIdFromDate;