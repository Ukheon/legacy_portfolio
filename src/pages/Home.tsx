import { Snowflake } from "@/components/Snowflake";
import styled from "styled-components";

export const Home = () => {
	return (
		<MainStyled>
			<Snowflake />
		</MainStyled>
	);
};

const MainStyled = styled.main`
	width: 100vw;
	color: white;
	background: #1d1d1d;
	height: 100vh;
`;

const IntroStyled = styled.div`
	font-size: 24px;

	font-weight: 800;
`;
