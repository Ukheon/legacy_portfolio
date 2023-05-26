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
		transform: translateY(100px);
	}
	100% {
		transform: translateY(0px);
	}
`;

export const stackTranslateYAnimation = keyframes`
	0% {
		transform: translateY(30px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const prevAnimation = keyframes`
	0% {
		transform: rotate(90deg) translateY(0px);
	}
	50% {
		transform: rotate(90deg) translateY(20px);
	}
	100% {
		transform: rotate(90deg) translateY(0px);
	}
`;

export const nextAnimation = keyframes`
	0% {
		transform: rotate(-90deg) translateY(0px);
	}
	50% {
		transform: rotate(-90deg) translateY(20px);
	}
	100% {
		transform: rotate(-90deg) translateY(0px);
	}
`;
