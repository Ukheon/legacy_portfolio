export const makeSnowflake = () => {
	const SnowFlakeArray = new Array(50);
	for (let i = 0, limit = 50; i < limit; i++) {
		SnowFlakeArray[i] = {
			position: Math.random() * window.screen.width + "px",
			delay: Math.random() * 10 + "s",
		};
	}
	return SnowFlakeArray;
};
