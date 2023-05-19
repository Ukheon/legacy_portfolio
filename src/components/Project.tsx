import React, { VoidFunctionComponent, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import arrowImg from "@/assets/arrow.png";
import { useProjectSet } from "@/hooks/useProjectSet";
import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { Pagination } from "./Pagination";

export interface ILink {
	href: string;
	image: string;
}

interface IProjectData {
	title: string;
	subtitle: string;
	content: string;
	detail: string | null;
	regrert: string;
	imageUrl: string[];
	tags: string[];
	links: ILink[];
}

interface IProps {
	data: IProjectData;
	index: number;
	current: number;
	nextCurrent: () => void;
	prevCurrent: () => void;
}

const initAnimation = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const prevAnimation = keyframes`
	0% {
		transform: rotate(90deg) translateY(0px);
	}
	50% {
		transform: rotate(90deg) translateY(20px);
	}
	100% {
		transform: rotate(90deg) translateY(0px);
	}
`;

const nextAnimation = keyframes`
	0% {
		transform: rotate(-90deg) translateY(0px);
	}
	50% {
		transform: rotate(-90deg) translateY(20px);
	}
	100% {
		transform: rotate(-90deg) translateY(0px);
	}
`;

export const Project = ({ data, index, current, nextCurrent, prevCurrent }: IProps) => {
	const {
		selectImg,
		animate,
		handleSubImageClick,
		handleAnimationEnd,
		showDetail,
		handleDetailButtonClick,
		expandImageToggle,
		handleExpandToggle,
	} = useProjectSet();

	return (
		<ProjectStyled hidden={current !== index}>
			<ImageSectionStyled>
				<MainImageSectionStyled>
					<MainImageStyled
						className={animate ? "animate" : ""}
						src={data.imageUrl[selectImg]}
						alt={"thumbnail"}
						onAnimationEnd={handleAnimationEnd}
					/>
					<HoverIconStyled onClick={handleExpandToggle} />
					{expandImageToggle ? (
						<>
							<CloseBarStyled>
								<img src={"./src/assets/close.png"} onClick={handleExpandToggle} />
							</CloseBarStyled>
							<ExpandMainImageStyled>
								<img src={data.imageUrl[selectImg]} />
							</ExpandMainImageStyled>
						</>
					) : (
						""
					)}
				</MainImageSectionStyled>
				<SubImageSectionStyled>
					{data.imageUrl.map((imgUrl, idx) => {
						return (
							<SubImageFrameStyled key={idx} onClick={() => handleSubImageClick(idx)} active={selectImg === idx}>
								<SubImageStyled src={imgUrl} />
							</SubImageFrameStyled>
						);
					})}
				</SubImageSectionStyled>
			</ImageSectionStyled>
			<InfoSectionStyled>
				<TitleStyled>
					{data.title}
					<p>{data.subtitle}</p>
				</TitleStyled>
				<InfoStyled>
					{data.content}
					{data.detail !== "" && <DetailButtonStyled onClick={handleDetailButtonClick}>더보기</DetailButtonStyled>}
				</InfoStyled>
				<DetailInfoSectionStyled hidden={!showDetail}>
					<p>···</p>
					<div></div>
				</DetailInfoSectionStyled>
				<HashTagSectionStyled>
					{data.tags.map((tag, idx) => {
						return <HashTagStyled key={idx}>#{tag}</HashTagStyled>;
					})}
				</HashTagSectionStyled>
				<LinkButton links={data.links} />
			</InfoSectionStyled>
			<PrevArrowStyled onClick={nextCurrent} />
			<NextArrowStyled onClick={prevCurrent} />
		</ProjectStyled>
	);
};

const ProjectStyled = styled.div`
	position: relative;
	margin: 0 auto;
	max-width: 900px;
	width: 100%;
	animation: ${initAnimation} ease-in-out 1s;
`;

const ImageSectionStyled = styled.section`
	@media (max-width: 840px) {
		height: auto;
	}
`;

const MainImageSectionStyled = styled.section`
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 9;
	border: 1px solid rgba(255, 255, 255, 0.5);
	background-color: rgba(255, 255, 255, 0.25);
	cursor: pointer;
	overflow: hidden;
`;

const HoverIconStyled = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	aspect-ratio: 16 / 9;
	background-color: transparent;
	&:hover {
		background-image: url("./src/assets/zoomIn.png");
		background-color: rgba(255, 255, 255, 0.25);
		background-repeat: no-repeat;
		background-size: 30px 30px;
		background-position: 98% 98%;
	}
`;

const MainImageStyled = styled.img`
	width: 100%;
	&.animate {
		animation: ${initAnimation} 0.3s linear;
	}
	&:hover {
		filter: invert(20%);
	}
`;

const CloseBarStyled = styled.div`
	position: fixed;
	z-index: 8000;
	top: 10%;
	left: 50%;
	transform: translate(-50%, 0);
	background: red;
	width: 80vw;
	height: 30px;
	border-bottom: 3px solid white;
	background-color: #e9d4ff;
	text-align: right;
	padding: 0 15px;
	cursor: auto;

	> img {
		cursor: pointer;
		position: absolute;
		right: 5px;
		top: 5px;
		width: 20px;
		height: 20px;
		background-repeat: no-repeat;
		padding: 2.5px 2.5px;
	}
`;

const ExpandMainImageStyled = styled.div`
	position: fixed;
	width: 80vw;
	height: 80vh;
	overflow-y: scroll;
	top: 50%;
	left: 50%;
	background-color: ${(props) => props.theme.bgColors.root};
	box-shadow: 0 0 25px gray;
	transform: translate(-50%, -50%);
	z-index: 2000;
	cursor: auto;
	img {
		width: 100%;
	}
`;

const SubImageSectionStyled = styled.section`
	margin-top: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 180px);
	grid-auto-flow: row;
	column-gap: 10px;
	row-gap: 10px;

	@media (max-width: 920px) {
		grid-template-columns: repeat(auto-fill, 160px);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(auto-fill, 100px);
	}
`;

const SubImageFrameStyled = styled.div<{ active: boolean }>`
	width: 100%;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	border: ${({ active }) => (active ? `2px solid white` : `2px solid rgba(255, 255, 255, 0.5)`)};
	cursor: pointer;
	&:hover {
		border: 2px solid white;
	}
`;

const SubImageStyled = styled.img`
	width: 100%;
`;

const arrowCSS = css`
	position: absolute;
	top: 50%;
	width: 80px;
	height: 80px;
	filter: invert(90%);
	cursor: pointer;
	background: url(${arrowImg}) 50% 50% no-repeat;
	background-size: 80px 80px;

	@media (max-width: ${(props) => `calc(${props.theme.width.section} + 4rem)`}) {
		display: none;
	}
`;

const PrevArrowStyled = styled.div`
	${arrowCSS}
	transform: rotate(90deg);
	left: -100px;
	animation: ${prevAnimation} 1.5s ease-in-out infinite;
`;

const NextArrowStyled = styled.div`
	${arrowCSS}
	transform: rotate(-90deg);
	right: -100px;
	animation: ${nextAnimation} 1.5s ease-in-out infinite;
`;

const InfoSectionStyled = styled.section``;

const TitleStyled = styled.h1`
	padding-top: 20px;
	font-weight: 700;

	p {
		font-size: 0.9rem;
		padding-top: 2.5px;
		color: #a4a4ff;
	}
`;

const InfoStyled = styled.div`
	font-size: 1rem;
	letter-spacing: -0.5px;
	padding-top: 20px;
	line-height: 1.5rem;
`;

const HashTagSectionStyled = styled.section`
	margin-top: 10px;
	display: flex;
	flex-flow: wrap;
`;

const HashTagStyled = styled.div`
	margin-top: 10px;
	font-size: 0.8rem;
	padding: 0.3rem 10px;
	margin-right: 15px;
	border-radius: 5px;
	background-color: rgb(51, 51, 60);
	transition-duration: 300ms;

	&:hover {
		scale: 1.1;
		transition-duration: 300ms;
	}
`;
const DetailButtonStyled = styled.button`
	background-color: transparent;
	color: yellow;
	border: none;
	line-height: 1rem;
	margin-left: 15px;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid yellow;
		text-decoration-line: 5px;
	}
`;

const DetailInfoSectionStyled = styled.section`
	margin: 0 auto;
	background-color: transparent;
	font-size: 0.9rem;
	> p {
		font-size: 20px;
		text-align: center;
		letter-spacing: 10px;
	}

	> div {
		h4 {
			font-size: 1rem;
			&::before {
				content: "·";
				margin-right: 5px;
			}
			margin-bottom: 10px;
		}
	}
`;
