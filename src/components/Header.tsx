import styled from "styled-components";
import menu from "@/assets/m_menu_button.svg";
import { Link as Scroll } from "react-scroll";
import { useEffect } from "react";

export const Header = () => {
	useEffect(() => {}, []);
	return (
		<HeaderStyled>
			<LogoStyled>Portfolio</LogoStyled>
			<NavStyled>
				<MenuButtonStyled></MenuButtonStyled>
				<ul>
					<MenuStyled>
						<Scroll to='home' smooth offset={-100}>
							<span>Home</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='home'>
							<span>Project</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='home'>
							<span>Study</span>
						</Scroll>
					</MenuStyled>
					<MenuStyled>
						<Scroll to='home'>
							<span>Contact</span>
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

	@media (max-width: 600px) {
		padding: 0 1.5rem;
	}
	height: ${(props) => props.theme.height.header};
	line-height: ${(props) => props.theme.height.header};
	/* background-color: rgba(50, 4, 232, 0.1); */
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	z-index: 1000;
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
			display: none;
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
