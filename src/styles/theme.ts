export const theme = {
	width: {
		mobile: "600px",
		tablet: "1200px",
	},
	height: {
		header: "4.5rem",
	},
	colors: {},
	grayColors: {
		gray100: "#f0f3f5",
		gray200: "#e4e7ea",
		gray300: "#c8ced3",
		gray400: "#acb4bc",
		gray500: "#8f9ba6",
		gray600: "#73818f",
		gray700: "#5c6873",
		gray800: "#2f353a",
		gray900: "#23282c",
	},
	bgColors: {
		root: "#151515",
		temp: "#f1f0f5",
	},
	margin: {
		header: "6rem",
		nav: "1.5rem",
	},
	size: {
		h1: "1.5rem",
		h2: "1.25rem",
		logo: "30px",
		nav: "16px",
	},
};

export type colors = typeof theme.colors;
export type margin = typeof theme.margin;
export type grayColors = typeof theme.grayColors;
export type bgColors = typeof theme.bgColors;
export type size = typeof theme.size;
export type width = typeof theme.width;
export type height = typeof theme.height;
