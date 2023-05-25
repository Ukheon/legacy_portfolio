import styled from "styled-components";
import { Title } from "../components/Title";
import { SectionLayout } from "@/layouts/SectionLayout";
import { Project } from "../components/Project";
import { useState } from "react";
import { Pagination } from "@/components/Pagination";
import { PROJECT_DATA } from "@/data/project";
import { useObserver } from "@/hooks/useObserver";
import { translateYAnimation } from "@/styles/animation";

export const ProjectPage = () => {
	const { isIntersection } = useObserver("project");
	const [current, setCurrent] = useState(0);

	const changeCurrent = (target: number) => setCurrent(target);

	const nextCurrent = () => {
		setCurrent((select) => {
			if (select === PROJECT_DATA.length - 1) {
				return 0;
			}
			return select + 1;
		});
	};

	const prevCurrent = () => {
		setCurrent((select) => {
			if (select === 0) {
				return PROJECT_DATA.length - 1;
			}
			return select - 1;
		});
	};

	return (
		<ProjectSecsionStyled>
			<SectionLayout id='project' overflow={"true"} height='70vh'>
				<Title title='PROJECT' />
				<ProjectStyled>
					{PROJECT_DATA.map((data, idx) => {
						return (
							<Project
								key={idx}
								data={data}
								current={current}
								nextCurrent={nextCurrent}
								prevCurrent={prevCurrent}
								index={idx}
								isIntersection={isIntersection}
							/>
						);
					})}
					<Pagination current={current} size={PROJECT_DATA.length} changeCurrent={changeCurrent} />
				</ProjectStyled>
			</SectionLayout>
		</ProjectSecsionStyled>
	);
};

const ProjectSecsionStyled = styled.section`
	background-color: ${(props) => props.theme.bgColors.root};
`;

const ProjectStyled = styled.div`
	margin: 0 auto;
`;
