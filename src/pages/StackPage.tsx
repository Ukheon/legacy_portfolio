import { Title } from "@/components/Title";
import { useObserver } from "@/hooks/useObserver";
import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "styled-components";

export const StackPage = () => {
	useObserver("stack");

	return (
		<StackSectionStyled>
			<SectionLayout id={"stack"} height='90vh'>
				<Title title={"STACKS"} />
				<SectionStyled>
					<p>
						<em>*</em>아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
					</p>
					<SectionTitleStyled># FRONT-END SKILL</SectionTitleStyled>
					<ArticleStyled>
						<BoxStyled url={"./src/assets/html.png"}>
							<BoxInfo>
								<p>HTML</p>
								<p>시멘틱 태그를 이용해 마크업 할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/css3.png"}>
							<BoxInfo>
								<p>CSS</p>
								<p>flex, grid를 사용하여 반응형웹을 적용할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/js.png"}>
							<BoxInfo>
								<p>JavaScript</p>
								<p>ES6 문법에 익숙하고, DOM을 이해하며 SPA를 구축 할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/typescript.png"}>
							<BoxInfo>
								<p>TypeScript</p>
								<p>
									Typescript를 경험한 이후 모든 프로젝트에서 사용중이며, 인텔리센스 기능을 활용해 생산성을 높이고 정적
									타입을 추가하여 유지보수에 신경씁니다.
								</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/reactjs.png"}>
							<BoxInfo>
								<p>React</p>
								<p>범용적이고 재사용 가능한 컴포넌트 설계가 가능합니다. hook, redux를 사용해 상태관리를 할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/jquery.png"}>
							<BoxInfo>
								<p>jQuery</p>
								<p>DOM 조작하는 메소드에 익숙하며 slick, date-picker 라이브러리를 사용해본 경험이 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
					</ArticleStyled>
					<SectionTitleStyled># DEV-OPS SKILL</SectionTitleStyled>
					<ArticleStyled>
						<BoxStyled url={"./src/assets/jira.png"}>
							<BoxInfo>
								<p>Jira</p>
								<p>Jira를 사용하여 작업의 우선순위를 관리하고, 이슈를 관리할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/bitbucket.png"}>
							<BoxInfo>
								<p>Bitbucket</p>
								<p>Jira와 함께 사용해 이슈를 연동하고 소스코드를 관리할 수 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/aws.png"}>
							<BoxInfo>
								<p>AWS</p>
								<p>
									EC2, LightSail 클라우드 서비스를 사용할 수 있으며, CloudFront 서비스를 이용해 글로벌 서비스를
									배포했습니다.
								</p>
							</BoxInfo>
						</BoxStyled>
						<BoxStyled url={"./src/assets/vscode.png"}>
							<BoxInfo>
								<p>vsCode</p>
								<p>범용적이고 재사용 가능한 컴포넌트 설계가 가능합니다. redux를 사용해 세션유지한 경험이 있습니다.</p>
							</BoxInfo>
						</BoxStyled>
					</ArticleStyled>
				</SectionStyled>
			</SectionLayout>
		</StackSectionStyled>
	);
};

const StackSectionStyled = styled.section`
	background-image: radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 0);

	background-size: 60px 60px;
`;

const SectionStyled = styled.section`
	> p {
		margin-top: 80px;
		margin-bottom: 70px;
		> em {
			color: yellow;
			margin-right: 5px;
		}
	}
	@media (max-width: ${(props) => props.theme.responsive.stackArticle}) {
		> p {
			display: none;
		}
	}
`;

const SectionTitleStyled = styled.span`
	display: inline-block;
	height: 41px;
	line-height: 40px;
	color: white;
	border: 1px solid black;
	box-sizing: border-box;
	text-align: center;
	border-radius: 25px;
	padding: 0 25px;
	background-color: rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
`;

const ArticleStyled = styled.article`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 40px 0;
	min-height: 130px;
	flex-flow: wrap;

	@media (max-width: ${(props) => props.theme.responsive.stackArticle}) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10px;
		row-gap: 10px;
	}
	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

const BoxStyled = styled.div<{ url: string }>`
	position: relative;
	width: 100px;
	height: 100px;
	margin-right: 30px;
	background: ${({ url }) => `url(${url})`};
	background-color: black;
	background-size: 50px 50px;
	background-position: 25px 25px;
	background-repeat: no-repeat;
	border: 1px solid rgba(255, 255, 255, 0.5);
	transition: width 0.3s, height 0.3s, background-position 0.3s;

	@keyframes moveLeft {
		0% {
			width: 180px;
			left: 180px;
		}
		100% {
			width: 180px;
			left: 100px;
		}
	}

	@keyframes moveRight {
		from {
			width: 180px;
			left: 100px;
			opacity: 1;
		}
		to {
			left: 180px;
			width: 180px;
			opacity: 0;
		}
	}

	@media (min-width: ${(props) => props.theme.responsive.stackArticle}) {
		&:hover {
			width: 300px;
			height: 120px;
			background-position: 25px 35px;
			> div {
				opacity: 1;
				animation: moveLeft 0.3s forwards;
			}
		}

		&:not(:hover) {
			> div {
				width: 100px;
				height: 100%;
				opacity: 0;
				animation: moveRight 0.3s;
			}
		}
	}
	@media (max-width: ${(props) => props.theme.responsive.stackArticle}) {
		width: 100%;
		> div {
			width: calc(100% - 120px);
			left: 100px;
			opacity: 1;
		}
	}
`;

const BoxInfo = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	width: 100px;
	height: 100%;
	overflow: hidden;
	transition: opacity 0.25s, left 0.5s;
	> p:last-child {
		font-size: 0.7rem;
		margin-top: 5px;
	}
`;
