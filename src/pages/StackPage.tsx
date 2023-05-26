import { Stack } from "@/components/Stack";
import { Title } from "@/components/Title";
import { STACK_DATA } from "@/data/stack";
import { useObserver } from "@/hooks/useObserver";
import { SectionLayout } from "@/layouts/SectionLayout";
import { initAnimation } from "@/styles/animation";
import styled from "styled-components";

export const StackPage = () => {
	const { isIntersection } = useObserver("stack");
	return (
		<StackSectionStyled>
			<SectionLayout id={"stack"} height='90vh'>
				<Title title={"STACKS"} />
				<SectionStyled hidden={!isIntersection}>
					<p>
						<em>*</em>아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
					</p>
					<Stack stackData={STACK_DATA} />
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
	animation: ${initAnimation} 1.5s forwards;
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
