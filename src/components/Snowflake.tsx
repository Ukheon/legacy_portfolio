import { makeSnowflake } from "@/utils/makeSnowflake";
import styled, { keyframes } from "styled-components";

export const Snowflake = () => {
	const SnowflakeData = makeSnowflake();
	return (
		<>
			{SnowflakeData.map((snow, idx) => {
				return (
					<SnowStyled key={idx} position={snow.position} delay={snow.delay}>
						{snow.texture}
					</SnowStyled>
				);
			})}
		</>
	);
};

const fall = keyframes`
	0% {
		opacity: 0.5;
	}

	25% {
		opacity: 0.75;
	}

	50% {
		opacity: 1;
	}

	75% {
		opacity: 0.5
	}

	100% {
		transform: translateY(100vh);
		opacity: 0;
	}

`;

const SnowStyled = styled.div<{ position: string; delay: string }>`
	z-index: 9999;
	position: absolute;
	top: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	opacity: 0;
	left: ${({ position }) => position};
	animation: ${fall} 20s infinite;
	animation-delay: ${({ delay }) => delay};
`;
