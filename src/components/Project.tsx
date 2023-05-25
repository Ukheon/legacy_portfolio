import styled, { css, keyframes } from "styled-components";
import { useProjectSet } from "@/hooks/useProjectSet";
import { LinkButton } from "./LinkButton";
import { initAnimation, translateYAnimation } from "@/styles/animation";
import { Link as Scroll } from "react-scroll";

export interface ILink {
	href: string;
	image: string;
}

interface IProjectData {
	title: string;
	subtitle: string;
	content: string;
	detail: string | null;
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
							src={"/assets/close.png"}
							onClick={(e) => {
								handleExpandToggle(e);
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
									{/* <h4>설명</h4>
									42Seoul에서 주최한 팀 프로젝트에 참여해 개발자를 위한 중고거래 사이트를 제작했습니다.
									<h4>팀 구성원</h4>
									프론트엔드 2명, 백엔드 2명으로 구성된 팀이었고, 주로 React와 Spring을 사용했습니다.
									<h4>기술 선정 이유</h4>
									우리 팀 구성원들은 모두 첫 프로젝트였기 때문에 리딩 가능한 다른 기술이 없어서 HTML과 JavaScript로 직접
									개발하는 대신에 React를 경험해보기로 결정했습니다.
									<h4>담당</h4>
									1. 프로젝트 배포를 위해 AWS EC2, Route53, 가비아를 사용하여 프로젝트를 배포했습니다.
									<br />
									2. 메인 화면 UI, 42OAuth연동, 상품 페이지 UI, fileReader사용해 상품 등록/삭제를 구현했습니다.
									<h4>어려웠던 점</h4>
									HTML, CSS, JavaScript의 지식이 부족한 상태에서 React로 개발을 진행하다보니, 간단한 퍼블리싱부터 문제가
									발생했습니다. 그 후에는 네이버, 다음, 카카오톡, 야후 페이지를 클론 코딩하며 HTML과 CSS를 공부하였습니다.
									기술 리딩을 받지 않고 진행하여 AWS S3에 이미지를 클라이언트에서 처리하는 과정에서 페이지 전환이 발생하면
									DB에는 남아있지만 S3에는 올라가지 않는 문제가 발생했습니다. 이후 직접 이 문제를 해결하기 위해 서버에서
									처리하는 방식을 적용하는 등의 수정 작업으로 시간을 소모하였습니다. */}
								</div>
							</DetailInfoSectionStyled>
							<HashTagSectionStyled>
								{data.tags.map((tag, idx) => {
									return <HashTagStyled key={idx}>#{tag}</HashTagStyled>;
								})}
							</HashTagSectionStyled>
							<LinkButton links={data.links} />
						</InfoSectionStyled>

						<Scroll to='project' offset={100}>
							<PrevArrowStyled onClick={prevCurrent} />
						</Scroll>
						<Scroll to='project' offset={100}>
							<NextArrowStyled onClick={nextCurrent} />
						</Scroll>
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
	&:hover {
		background-color: rgba(255, 255, 255, 0.25);
		background-repeat: no-repeat;
		border: 1px solid white;
	}
`;

const HoverIconStyled = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	aspect-ratio: 16 / 9;
	background-color: transparent;
	&:hover {
		background-image: url("/assets/zoomIn.png");
		background-repeat: no-repeat;
		background-size: 30px 30px;
		background-position: 98% 98%;
		filter: invert(100%);
	}
`;

const MainImageStyled = styled.img`
	width: 100%;
	&.animate {
		animation: ${initAnimation} 0.3s ease-in-out;
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
	background: url("/assets/arrow.png") 50% 50% no-repeat;
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
	animation: ${initAnimation} 1s forwards;
	margin: 0 auto;
	background-color: transparent;
	font-size: 0.9rem;
	> p {
		font-size: 20px;
		text-align: center;
		letter-spacing: 10px;
	}

	> div {
		line-height: 1.5rem;
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
