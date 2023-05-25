import styled, { css } from "styled-components";
import menu from "@/assets/m_menu_button.svg";
import { Link as Scroll } from "react-scroll";
import { useState } from "react";

export const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleMenuButtonClick = () => setToggle(!toggle);

	const closeToggle = () => setToggle(false);

	return (
		<HeaderStyled>
			<LogoStyled>Portfolio</LogoStyled>
			<NavStyled toggle={toggle}>
				<MenuButtonStyled toggle={toggle} onClick={handleMenuButtonClick} />
				<ul>
					<MenuStyled>
						<Scroll to='about' smooth offset={-100} onClick={closeToggle}>
							<span>ABOUT</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='project' smooth onClick={closeToggle}>
							<span>PROJECT</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='stack' smooth onClick={closeToggle}>
							<span>STACKS</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='contact' smooth onClick={closeToggle}>
							<span>CONTACT</span>
						</Scroll>
					</MenuStyled>
				</ul>
			</NavStyled>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 ${(props) => props.theme.margin.header};
	@media (max-width: 1400px) {
		padding: 0 2rem;
	}

	@media (max-width: 600px) {
		padding: 0 1.5rem;
	}
	height: ${(props) => props.theme.height.header};
	line-height: ${(props) => props.theme.height.header};
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	z-index: 100;
`;

const LogoStyled = styled.h2`
	display: block;
	width: 100px;
	font-size: ${(props) => props.theme.size.logo};
	height: ${(props) => props.theme.height.header};
`;

const NavStyled = styled.nav<{ toggle: boolean }>`
	font-size: ${(props) => props.theme.size.nav};
	height: ${(props) => props.theme.height.header};
	font-weight: 700;

	ul {
		display: flex;
	}
	@media (max-width: 600px) {
		ul {
			display: ${({ toggle }) => (toggle ? "block" : "none")};
			position: fixed;
			height: 100vh;
			width: 100vw;
			background-color: rgba(0, 0, 0, 0.9);
			top: 0;
			left: 0;
			text-align: center;
			padding: 20vh 0;
			line-height: 15vh;
			font-size: 30px;
		}
	}
`;

const MenuStyled = styled.li`
	margin-left: ${(props) => props.theme.margin.nav};
	span:hover {
		border-bottom: 3px solid white;
		padding-bottom: 3px;
	}

	@media (max-width: 600px) {
		margin-left: 0;
	}
`;

const MobileMenuButtonCSS = css`
	position: fixed;
	display: block;
	width: 32px;
	top: 0;
	right: 0;
	background-image: url("./src/assets/close.png");
	filter: invert(100%);
	background-size: 20px;
	margin-right: 2rem;
`;

const MenuButtonStyled = styled.button<{ toggle: boolean }>`
	display: none;
	width: 32px;
	height: ${(props) => props.theme.height.header};
	background-image: url(${menu});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 32px;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
	z-index: 9999;

	@media (max-width: 600px) {
		${({ toggle }) => (toggle ? MobileMenuButtonCSS : "")};
		display: block;
	}
`;
