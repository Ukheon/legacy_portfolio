import styled from "styled-components";
import IntroImage from "@/assets/profile3.jpg";
import { Title } from "./Title";
import { SectionLayout } from "@/layouts/SectionLayout";

export const Intro = () => {
	return (
		<SectionLayout>
			<Title title='INTRO' />
			<IntroStyled>
				<img src={IntroImage}></img>
				<div>
					<h2>안녕하세요. 프론트엔드 개발자 권욱헌입니다.</h2>
					<p>
						<AccentStyled>"완벽한 것을 추구하는 것보다 완성하는 것이 더 중요하다."</AccentStyled> -Facebook
					</p>
					<p>
						위 문장은 제가 중요시하는 가치관입니다. 약속된 기한 내에 서비스를 완성하는 것은 사용자에게 첫 번째로 제공되는
						서비스라고 생각합니다. 프로젝트나 일의 경험을 통해 완성의 가치를 최우선으로 여기며, 정해진 마일스톤안에서 가장
						안정적인 서비스를 제공하기 위해 최선을 다하고 있습니다.
					</p>
				</div>
			</IntroStyled>
		</SectionLayout>
	);
};

const IntroStyled = styled.div`
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

	p:first-child {
		margin-bottom: 10px;
	}

	p {
		z-index: 10;
		line-height: 2rem;
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
	}
`;

const AccentStyled = styled.span`
	color: #ff9595;
`;
