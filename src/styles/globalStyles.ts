import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	}
	button, a {
		cursor: pointer;
	}

	body {
		font-family: sans-serif;
		overflow-x: hidden;
		overflow-y: scroll;

		background-color: ${(props) => props.theme.bgColors.root};
		color: white;
	}

	html {
		font-size: 18px;
	}
	
	@media (max-width: 1200px) {
		html {
			font-size: 16px;
		}
	}

	@media (max-width: 830px) {
		html {
			font-size: 14px;
		}
	}


`;
