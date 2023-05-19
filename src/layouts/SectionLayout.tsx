import { ReactNode } from "react";
import styled from "styled-components";

export const SectionLayout = ({
	id = "",
	children,
	overflow = "true",
	height = "100vh",
}: {
	id?: string;
	children: ReactNode;
	overflow?: string;
	height?: string;
}) => {
	return (
		<>
			<SectionStyled id={id} overflow={overflow} height={height}>
				{children}
			</SectionStyled>
			<BlurStyled />
		</>
	);
};

const SectionStyled = styled.div<{ overflow: string; height: string }>`
	position: relative;
	max-width: ${(props) => props.theme.width.section};
	margin: 0 auto;
	@media (max-width: ${(props) => `calc(${props.theme.width.section} + 4rem)`}) {
		margin: 0 2rem;
	}
	overflow: ${({ overflow }) => (overflow === "true" ? "hidden" : "")};
	min-height: ${({ height }) => height};
`;

const BlurStyled = styled.div`
	border-top: 0.5px solid white;
	left: 0;
	bottom: 0;
	width: 100vw;
	height: 5px;
	filter: blur(3px);
`;
