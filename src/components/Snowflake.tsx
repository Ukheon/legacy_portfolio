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
	from {
	}
	to {
		transform: translateY(100vh);
		opacity: 0;
	}

`;

const SnowStyled = styled.div<{ position: string; delay: string }>`
	position: absolute;
	top: ${(props) => props.theme.height.header};
	width: 10px;
	height: 10px;
	border-radius: 50%;
	left: ${({ position }) => position};
	animation: ${fall} 20s infinite;
	animation-delay: ${({ delay }) => delay};
`;
