import styled from "styled-components";

export const Title = ({ title }: { title: string }) => {
	return <TitleStyled>{title}</TitleStyled>;
};

const TitleStyled = styled.h1`
	max-width: ${(props) => props.theme.width.section};
	padding-top: 6rem;
	margin-bottom: 3rem;

	@media (max-width: ${(props) => `calc(${props.theme.width.section} + 4rem)`}) {
		font-size: 1.5rem;
	}

	border-bottom: 1px solid white;
`;
