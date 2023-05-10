import "styled-components";
import { colors, size, width, height, bgColors, grayColors, margin } from "./theme";

declare module "styled-components" {
	export interface DefaultTheme {
		width: width;
		height: height;
		colors: colors;
		grayColors: grayColors;
		bgColors: bgColors;
		size: size;
		margin: margin;
	}
}
