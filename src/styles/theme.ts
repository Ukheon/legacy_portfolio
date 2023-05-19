export const theme = {
	width: {
		mobile: "600px",
		tablet: "1200px",
		section: "1100px",
	},
	height: {
		header: "4.5rem",
	},
	colors: {},
	bgColors: {
		root: "#151515",
		temp: "#f1f0f5",
	},
	margin: {
		header: "6rem",
		nav: "1.5rem",
	},
	size: {
		logo: "30px",
		nav: "16px",
	},
};

export type colors = typeof theme.colors;
export type margin = typeof theme.margin;
export type bgColors = typeof theme.bgColors;
export type size = typeof theme.size;
export type width = typeof theme.width;
export type height = typeof theme.height;
