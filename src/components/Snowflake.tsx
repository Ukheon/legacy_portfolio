import { makeSnowflake } from "@/utils/makeSnowflake";
import styled, { keyframes } from "styled-components";

export const Snowflake = () => {
	const SnowflakeData = makeSnowflake();
	return (
		<>
			{SnowflakeData.map((snow, idx) => {
				return <SnowStyled key={idx} position={snow.position} delay={snow.delay}></SnowStyled>;
			})}
		</>
	);
};

const fall = keyframes`
	from {

	}
	to {
		transform: translateY(110vh);
		opacity: 0;
	}

`;

const SnowStyled = styled.div<{ position: string; delay: string }>`
	position: absolute;
	top: -10px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: white;
	left: ${({ position }) => position};

	animation: ${fall} 10s infinite;
	animation-delay: ${({ delay }) => delay};
`;
