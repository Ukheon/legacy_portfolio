import styled from "styled-components";

export const Pagination = ({
	current,
	size,
	changeCurrent,
}: {
	current: number;
	size: number;
	changeCurrent: (target: number) => void;
}) => {
	const pagiArray = new Array(size).fill(0);

	return (
		<PaginationStyled>
			{pagiArray.map((_, idx) => {
				return (
					<CircleStyled key={idx} className={idx === current ? "active" : ""} onClick={() => changeCurrent(idx)}></CircleStyled>
				);
			})}
		</PaginationStyled>
	);
};

const PaginationStyled = styled.div`
	margin: 0 auto;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0 4rem 0;
`;

const CircleStyled = styled.div`
	position: relative;
	width: 1rem;
	height: 1rem;
	background-color: rgb(80, 80, 90);
	border-radius: 50%;
	margin: 0 15px;
	cursor: pointer;

	::-webkit-scrollbar {
		background-color: gray;
	}

	::-webkit-scrollbar-thumb {
		background-color: white;
	}

	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-thumb {
	}

	&::before {
		content: "";
		position: absolute;
		bottom: 0px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		padding: 10px 5px;
	}
	&.active {
		background-color: white;
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.85));
	}
`;
