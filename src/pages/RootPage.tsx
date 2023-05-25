import styled from "styled-components";
import { Header } from "@/components/Header";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ContactPage } from "./ContactPage";
import { Footer } from "@/components/Footer";
import { StackPage } from "./StackPage";

export const RootPage = () => {
	return (
		<RootStyled>
			<Header />
			<MainStyled>
				<AboutPage />
				<ProjectPage />
				<StackPage />
				<ContactPage />
			</MainStyled>
			<Footer />
		</RootStyled>
	);
};

const RootStyled = styled.div`
	width: 100%;
	background: ${(props) => props.theme.bgColors.root};
`;

const MainStyled = styled.main``;
