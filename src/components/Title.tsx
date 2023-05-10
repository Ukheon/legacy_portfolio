import styled from "styled-components";

export const Title = ({ title }: { title: string }) => {
	return <TitleStyled>{title}</TitleStyled>;
};

const TitleStyled = styled.h1`
	max-width: 1200px;
	margin: 9rem auto 3rem auto;
	margin-top: 9rem;
	margin-bottom: 3rem;

	@media (max-width: 1240px) {
		padding: 0 2rem;
	}

	border-bottom: 1px solid white;
`;
