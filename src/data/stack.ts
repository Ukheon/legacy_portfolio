import { BASE_URL } from "./project";

export const STACK_DATA = {
	frontEnd: {
		title: "# FRONT_END SKILL",
		time: "0.5s",
		content: [
			{
				title: "HTML",
				info: "시멘틱 태그를 이용해 마크업 할 수 있습니다.",
				image: BASE_URL + "/assets/html.png",
			},
			{
				title: "CSS",
				info: "flex, grid를 사용하여 반응형웹을 적용할 수 있습니다.",
				image: BASE_URL + "/assets/css3.png",
			},
			{
				title: "JavaScript",
				info: "ES6 문법에 익숙하고, DOM을 이해하며 SPA를 구축 할 수 있습니다.",
				image: BASE_URL + "/assets/js.png",
			},
			{
				title: "TypeScript",
				info: "Typescript를 경험한 이후 모든 프로젝트에서 사용중이며, 인텔리센스 기능을 활용해 생산성을 높이고 정적타입을 추가하여 유지보수에 신경씁니다.",
				image: BASE_URL + "/assets/typescript.png",
			},
			{
				title: "React",
				info: "범용적이고 재사용 가능한 컴포넌트 설계가 가능합니다. hook, redux를 사용해 상태관리를 할 수 있습니다.",
				image: BASE_URL + "/assets/reactjs.png",
			},
			{
				title: "jQuery",
				info: "DOM 조작하는 메소드에 익숙하며 slick, date-picker 라이브러리를 사용해본 경험이 있습니다.",
				image: BASE_URL + "/assets/jquery.png",
			},
		],
	},
	devOps: {
		title: "# DEV-OPS SKILL",
		time: "1s",
		content: [
			{
				title: "Jira",
				info: "Jira를 사용하여 작업의 우선순위를 관리하고, 이슈를 관리할 수 있습니다.",
				image: BASE_URL + "/assets/jira.png",
			},
			{
				title: "Bitbucket",
				info: "Jira와 함께 사용해 이슈를 연동하고 소스코드를 관리할 수 있습니다.",
				image: BASE_URL + "/assets/bitbucket.png",
			},
			{
				title: "AWS",
				info: "EC2, LightSail 클라우드 서비스를 사용할 수 있으며, CloudFront 서비스를 이용해 글로벌 서비스를 배포했습니다.",
				image: BASE_URL + "/assets/aws.png",
			},
			{
				title: "vsCode",
				info: "ESLint, Prettier 설정을 통해 코딩 컨벤션을 유지하며 sinppets를 사용하여 생산성을 높입니다.",
				image: BASE_URL + "/assets/vscode.png",
			},
		],
	},
};
