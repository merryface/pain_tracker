const throttle = (fn: (...args: any) => any, time: number): any => {
	let running = false;

	return (...args: any) => {
		if (!running) {
			running = true;

			setTimeout(() => {
				running = false;
			}, time);

			fn(...args);
		}
	}
};

export default throttle;