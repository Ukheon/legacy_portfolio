import styled, { keyframes } from "styled-components";
import { Title } from "../components/Title";
import { SectionLayout } from "@/layouts/SectionLayout";
import { useObserver } from "@/hooks/useObserver";
import { initCSS } from "@/styles/CSS";
import { Typing } from "@/components/Typing";
import { initAnimation } from "@/styles/animation";

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50%, 75% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const AboutPage = () => {
	const { isIntersection } = useObserver("about");

	return (
		<AboutSectionStyled>
			<SectionLayout id='about'>
				<Title title='ABOUT' />
				{isIntersection && (
					<IntroStyled className='about'>
						<img src={"/assets/profile3.jpg"}></img>
						<div>
							<h2 id='typing-text'>
								<Typing typingText='안녕하세요. 프론트엔드 개발자 권욱헌입니다.' />
							</h2>
							<p>
								<AccentStyled>"완벽한 것을 추구하는 것보다 완성하는 것이 더 중요하다."</AccentStyled>
							</p>
							<p>
								위 문장은 제가 중요시하는 가치관입니다. 약속된 기한 내에 서비스를 완성하는 것은 사용자에게 첫 번째로
								제공되는 서비스라고 생각합니다. 프로젝트와 일의 경험을 통해 완성의 가치를 최우선으로 여기며, 정해진
								마일스톤안에서 가장 안정적인 서비스를 제공하기 위해 최선을 다하고 있습니다.
							</p>
						</div>
					</IntroStyled>
				)}
			</SectionLayout>
		</AboutSectionStyled>
	);
};

const AboutSectionStyled = styled.section`
	background: linear-gradient(45deg, #898da9, #6e728c, #000c40);
	background-size: 400% 400%;
	animation: ${gradientAnimation} 20s infinite ease-in-out forwards;
`;

const IntroStyled = styled.div`
	${initCSS};
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	z-index: 10;

	img {
		height: 600px;
		border-radius: 10px;
		border: 2px solid white;
		background-repeat: no-repeat;
		margin-right: 2rem;
	}

	p {
		margin-bottom: 10px;
		z-index: 10;
		line-height: 2rem;
	}

	p:nth-child(2) {
		opacity: 0;
		animation: ${initAnimation} 1s ease-in-out;
		animation-fill-mode: forwards;
		animation-delay: 3s;
	}

	p:last-child {
		opacity: 0;
		animation: ${initAnimation} 2s ease-in-out;
		animation-fill-mode: forwards;
		animation-delay: 5s;
		margin-bottom: 20px;
	}

	h2 {
		margin-bottom: 50px;
	}

	@media (max-width: 800px) {
		display: block;
		img {
			width: 100%;
			height: auto;
		}
		h2 {
			margin: 20px 0;
		}
		p {
			font-size: 16px;
		}
	}
`;

const AccentStyled = styled.span`
	color: yellow;
	border-bottom: 1px solid yellow;
	padding-bottom: 2px;
`;
