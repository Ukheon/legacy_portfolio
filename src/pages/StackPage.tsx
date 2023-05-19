import { Title } from "@/components/Title";
import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "styled-components";

export const StackPage = () => {
	return (
		<StackSectionStyled>
			<SectionLayout id={"stack"}>
				<Title title={"STACKS"} />
			</SectionLayout>
		</StackSectionStyled>
	);
};

const StackSectionStyled = styled.section`
	/* background: rgb(32, 31, 32); */
	background-image: radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 0);

	background-size: 65px 65px;
	/* background: linear-gradient(135deg, rgba(32, 31, 32, 1) 0%, rgba(66, 66, 73, 1) 50%, rgba(32, 31, 32, 1) 100%); */
`;
