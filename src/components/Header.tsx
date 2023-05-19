import styled from "styled-components";
import menu from "@/assets/m_menu_button.svg";
import { Link as Scroll } from "react-scroll";

export const Header = () => {
	return (
		<HeaderStyled>
			<LogoStyled>Portfolio</LogoStyled>
			<NavStyled>
				<MenuButtonStyled />
				<ul>
					<MenuStyled>
						<Scroll to='about' smooth offset={-100}>
							<span>ABOUT</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='project' smooth>
							<span>PROJECT</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='home'>
							<span>STACKS</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='home'>
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

const NavStyled = styled.nav`
	font-size: ${(props) => props.theme.size.nav};
	height: ${(props) => props.theme.height.header};
	font-weight: 700;

	ul {
		display: flex;
		@media (max-width: 600px) {
			display: block;
			position: fixed;
			height: 100vh;
			width: 100vw;
			background-color: red;
			top: 50%;
			left: 50%;
			font-size: 30px;
			transform: translate(-50%);
		}
	}
`;

const MenuStyled = styled.li`
	margin-left: ${(props) => props.theme.margin.nav};
	span:hover {
		border-bottom: 3px solid white;
		padding-bottom: 3px;
	}
`;

const MobileMenuStyled = styled.li``;

const MenuButtonStyled = styled.button`
	display: none;
	width: 65px;
	height: ${(props) => props.theme.height.header};
	background-image: url(${menu});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 32px;
	background-color: transparent;
	outline: none;
	border: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
