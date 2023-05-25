import { keyframes } from "styled-components";

export const initAnimation = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const blinkAnimation = keyframes`

	0%, 100% {
		border-color: transparent;
	}
	50% {
		border-color: white;
	}
`;

export const translateYAnimation = keyframes`
	0% {
		transform: translateY(200px);
	}
	100% {
		transform: translateY(0px);
	}
`;
