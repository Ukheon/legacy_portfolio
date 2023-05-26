import { stackTranslateYAnimation } from "@/styles/animation";
import React from "react";
import styled from "styled-components";

export const Stack = ({ stackData }: { stackData: IStackData }) => {
	return (
		<>
			{Object.keys(stackData).map((key) => {
				return (
					<React.Fragment key={key}>
						<SectionTitleStyled time={stackData[key].time}>{stackData[key].title}</SectionTitleStyled>
						<ArticleStyled time={stackData[key].time}>
							{stackData[key].content.map((data) => {
								return (
									<BoxStyled key={data.title} url={data.image}>
										<BoxInfo>
											<p>{data.title}</p>
											<p>{data.info}</p>
										</BoxInfo>
									</BoxStyled>
								);
							})}
						</ArticleStyled>
					</React.Fragment>
				);
			})}
		</>
	);
};

const SectionTitleStyled = styled.span<{ time: string }>`
	display: inline-block;
	height: 41px;
	line-height: 40px;
	opacity: 0;
	color: white;
	border: 1px solid black;
	box-sizing: border-box;
	text-align: center;
	border-radius: 25px;
	padding: 0 25px;
	background-color: rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
	animation: ${stackTranslateYAnimation} 1.5s forwards;
	animation-delay: ${({ time }) => time};
`;

const ArticleStyled = styled.article<{ time: string }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 40px 0;
	min-height: 130px;
	flex-flow: wrap;
	opacity: 0;
	animation: ${stackTranslateYAnimation} 1.5s forwards;
	animation-delay: ${({ time }) => time};

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
				animation: moveRight 0.2s;
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
