import styled from "styled-components";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";

export const Home = () => {
	return (
		<RootStyled>
			<Header />
			<MainStyled id='home'>
				<Intro />
			</MainStyled>
		</RootStyled>
	);
};

const RootStyled = styled.div`
	width: 100%;
	height: 2000px;
	background: ${(props) => props.theme.bgColors.root};
`;

const MainStyled = styled.main`
	height: 700px;
`;
