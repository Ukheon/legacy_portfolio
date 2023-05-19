import "styled-components";
import { colors, size, width, height, bgColors, margin } from "./theme";

declare module "styled-components" {
	export interface DefaultTheme {
		width: width;
		height: height;
		colors: colors;
		bgColors: bgColors;
		size: size;
		margin: margin;
	}
}
