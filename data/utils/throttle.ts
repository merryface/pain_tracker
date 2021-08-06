const throttle = (fn: (...args: any) => any): any => {
	let running = false;

	if (!running) {
		running = true;

		setTimeout(() => {
			running = false;
		}, 500);

		return (...args: any) => fn(...args);
	}
};

export default throttle;