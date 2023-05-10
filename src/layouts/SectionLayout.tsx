import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const SectionLayout = ({ children, overflow = false }: { children: ReactNode; overflow?: boolean }) => {
	return <SectionStyled overflow={overflow}>{children}</SectionStyled>;
};

const SectionCSS = css`
	max-width: 1200px;
	margin: 0 auto;
	@media (max-width: 1240px) {
		margin: 0 2rem;
	}
`;

const SectionStyled = styled.div<{ overflow: boolean }>`
	overflow: ${({ overflow }) => (overflow ? "hidden" : "")};
	${SectionCSS};
`;
