interface ISnowflake {
	position: string;
	delay: string;
	texture: string;
}

export const makeSnowflake = () => {
	const snowflakeArray: ISnowflake[] = new Array(50);
	const textureArray = ["❄", "❅"];

	for (let i = 0, limit = 30; i < limit; i++) {
		snowflakeArray[i] = {
			position: Math.random() * window.screen.width + "px",
			delay: Math.random() * 25 + "s",
			texture: textureArray[Math.floor((Math.random() * 10) % 2)],
		};
	}
	return snowflakeArray;
};
