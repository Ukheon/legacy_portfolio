import styled, { css, keyframes } from "styled-components";
import arrowImg from "@/assets/arrow.png";
import { useProjectSet } from "@/hooks/useProjectSet";
import { LinkButton } from "./LinkButton";
import { initAnimation, translateYAnimation } from "@/styles/animation";

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
	isIntersection: boolean;
}

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

export const Project = ({ data, index, current, nextCurrent, prevCurrent, isIntersection }: IProps) => {
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
		<>
			{expandImageToggle ? (
				<ExpendSectionStyled onClick={(e) => handleExpandToggle(e)}>
					<CloseBarStyled onClick={(e) => e.stopPropagation()}>
						<img
							src={"./src/assets/close.png"}
							onClick={(e) => {
								handleExpandToggle(e);
								console.log("image 클릭");
							}}
						/>
					</CloseBarStyled>
					<ExpandMainImageStyled onClick={(e) => e.stopPropagation()}>
						<img src={data.imageUrl[selectImg]} />
					</ExpandMainImageStyled>
				</ExpendSectionStyled>
			) : (
				""
			)}
			{isIntersection && (
				<AnimationStyled>
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
								<div dangerouslySetInnerHTML={{ __html: data.detail || "" }}></div>
								<div>
									{/* <h4>기술 선정 이유</h4>
									생산성을 위해 React, Typescript, Styled-Components를 사용했습니다. css-in-js 방식이 개인적으로 알아보기
									쉬워 Styled-component를 사용하여 UI작업을 했습니다.
									<h4>어려운 점</h4>
									한 페이지에서 모든 컨텐츠를 보여주는 과정이 익숙하지 않아 힘들었 */}
								</div>
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
				</AnimationStyled>
			)}
		</>
	);
};

const AnimationStyled = styled.div`
	animation: ${translateYAnimation} 1s ease-in-out forwards;
`;

const ProjectStyled = styled.div`
	animation: ${initAnimation} 0.5s ease-in-out forwards;

	position: relative;
	margin: 0 auto;
	max-width: 900px;
	width: 100%;
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
		animation: ${initAnimation} 0.3s ease-in-out;
	}
	&:hover {
		filter: invert(20%);
	}
`;

const ExpendSectionStyled = styled.article`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 2000;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
`;

const CloseBarStyled = styled.div`
	position: fixed;
	z-index: 8000;
	top: calc(10% - 30px);
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
		&:hover {
			filter: invert(100%);
			background-color: green;
		}
	}

	@media (max-width: 900px) {
		top: 0px !important;
		width: 100% !important;
		transform: translate(-50%, 0%) !important;
	}
`;

const ExpandMainImageStyled = styled.div`
	position: fixed;
	width: 80vw;
	height: 80vh;
	top: 50%;
	left: 50%;
	background-color: ${(props) => props.theme.bgColors.root};
	box-shadow: 0 0 25px gray;
	transform: translate(-50%, -50%);
	z-index: 7999;
	cursor: auto;
	display: flex;
	overflow: auto;

	@media (max-width: 900px) {
		width: 100% !important;
		height: calc(100% - 30px) !important;
		top: 30px !important;
		transform: translate(-50%, 0%) !important;
	}
	img {
		display: block;
		margin: 0 auto;
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
			margin-top: 20px;
			margin-bottom: 10px;
			&::before {
				content: "·";
				margin-right: 5px;
			}
		}
	}
`;
