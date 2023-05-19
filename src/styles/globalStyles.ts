import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}
	button, a {
		text-decoration: none;
		cursor: pointer;
	}

	h1 {
		font-size: 1.75rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	body {
		font-family: sans-serif;
		overflow-x: hidden;
		overflow-y: scroll;

		background-color: ${(props) => props.theme.bgColors.root};
		color: white;

		::-webkit-scrollbar {
			width: 16px;
			background-color: white;
		}

		::-webkit-scrollbar-thumb {
			border-radius: 8px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: #606060;
		}

		
	}

	html {
		font-size: 18px;
	}
	
	@media (max-width: 1200px) {
		html {
			font-size: 16px;
		}
	}

	@media (max-width: 840px) {
		html {
			font-size: 14px;
		}
	}


`;
