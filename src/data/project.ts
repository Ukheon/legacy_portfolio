export const BASE_URL = process.env.NODE_ENV === "production" ? "/portfolio" : "";
const YOUTUBE_IMAGE = BASE_URL + "/assets/youtube.png";
const GITHUB_IMAGE = BASE_URL + "/assets/github-mark.png";
const CHAIN_IMAGE = BASE_URL + "/assets/chain.png";

export const PROJECT_DATA = [
	{
		title: "PORTFOLIO",
		subtitle: "개인프로젝트",
		content:
			"React + Styled-Components를 이용해 만든 포트폴리오 웹사이트 입니다. 모든 환경에서 사용 가능하게 반응형웹으로 제작했습니다.",
		detail: `
				<h4>2023.05.01 ~ 2023.05.26</h4>
				<h4>기술 선정 이유</h4>
				React, Typescript, Styled-Components를 사용한 이유는 생산성을 높이기 위함입니다. 개인적으로 CSS-in-JS
				방식이 이해하기 쉽다고 판단하여 Styled-Components를 선택하여 UI 작업을 수행했습니다
				<h4>경험한 이슈</h4>
				GitHub Pages로 배포하는 과정에서 동일한 base URL을 갖지 않아서 js 및 이미지 파일을 불러올 수 없는 문제가 발생했습니다. 이 문제를 해결하기 위해 base URL을 설정하고, 이미지 파일의 경우 개발 및 배포를 구분하여 해당 이미지를 불러왔습니다.
				<h4>어려웠던 점</h4>
				애니메이션 경험이 부족하여 animate와 transition과 관련된 문제가 발생했으며, 반응형 웹을 구축하는
				과정에서 각 섹션마다 다른 분기점을 설정해야 해서 유지보수가 어려웠습니다.`,
		imageUrl: [
			BASE_URL + "/assets/portfolio1.png",
			BASE_URL + "/assets/portfolio2.png",
			BASE_URL + "/assets/portfolio3.png",
			BASE_URL + "/assets/portfolio4.png",
		],
		tags: ["React", "Typescript", "Styled-Components", "반응형웹"],
		links: [
			{
				image: CHAIN_IMAGE,
				href: "https://ukheon.github.io/portfolio/",
			},
			{
				image: GITHUB_IMAGE,
				href: "https://github.com/Ukheon/portfolio",
			},
		],
	},
	{
		title: "회전 네비게이션",
		subtitle: "개인프로젝트",
		content: "네이버 그린닷 UI로 네비게이션을 제작했습니다.",
		detail: `
				<h4>2023.01.25 ~ 2023.01.31</h4>
				<h4>설명</h4>
				네이버 그린닷 UI를 이용한 네비게이션을 구현했습니다.
				<h4>경험한 이슈</h4>
				1. 웹/앱에서 동작하는 UI를 제작하는 과정에서 PC, Mobile 플랫폼 구분하는 함수를 구현해 플랫폼에 따른 이벤트를 적용했습니다.
				<br />
				2. 앱에서 동작할 때 네비게이션을 회전시키는 과정에서 스크롤이 내려가는 이슈가 발생했습니다. 이를 해결하기 위해 네비게이션 토글을 클릭하면 body 요소의 touch-action을 제거하였습니다.
				<br />
				3. 네비게이션 아이콘 배치 과정에서 container 크기와 겹치게 만든 뒤, 중심점에서 회전하여 아이콘을 위치시켰는데 모든 링크가 같은크기로 설정되어 마지막 요소의 이벤트만 적용되는 문제가 발생했습니다.
				이를 해결하기 위해 아이콘을 위치시킨 후 상대적 위치를 구한 뒤 크기를 설정하고, top과 left 속성을 사용하여 기존에 위치하던 영역으로부터 아이콘을 정확히 배치하였습니다.
				<h4>어려웠던 점</h4>
				웹 및 앱에서 동작하는 이벤트가 다르다는 점에서 어려움을 겪었습니다. 또한, 마우스와 터치 이벤트로 회전하는 과정에서 클릭 지점부터 이동한 거리만큼 회전시키는 공식을 공부하는 데 많은 시간이 소요되었습니다.
				`,
		imageUrl: [BASE_URL + "/assets/rotate.png", BASE_URL + "/assets/rotate1.png"],
		tags: ["HTML", "Javascript", "CSS"],
		links: [
			{
				image: CHAIN_IMAGE,
				href: "https://ukheon.github.io/RotateNavigation/",
			},
			{
				image: GITHUB_IMAGE,
				href: "https://github.com/Ukheon/RotateNavigation",
			},
		],
	},
	{
		title: "욱플릭스",
		subtitle: "개인프로젝트",
		content: "Netflix 클론코딩 프로젝트",
		detail: `
				<h4>2022.02.07 ~ 2022.02.25</h4>
				<h4>설명</h4>
				React, Typescript와 ES6문법, 다양한 리액트 라이브러리를 공부하기 위해 TMDB API를 활용해 Netflix UI를 클론한 OTT 웹사이트를 구현했습니다.
				<h4>사용한 기술</h4>
				1. Axios, React-query를 사용해 TMDB Data를 처리하였습니다.
				<br />
				2. Framer-motion 를 사용해 팝업, 슬라이드 애니메이션을 구현했습니다.
				<br />
				3. react-hook-form을 사용하여 검색을 구현했습니다.
				<br />
				4. Styled-Components를 사용하여 UI 퍼블리싱 했습니다.
				<h4>경험한 이슈</h4>
				array map 메소드를 사용하는 중 map 콜백함수 인수로 생성되는 currentValue가 수정이 안되는 이슈가 발생하여 새로운 배열을 반환받고 난 후 변경하였습니다.
				자식요소의 이벤트 발생이 부모요소 이벤트도 불러오는 이슈가 발생하여 stopPropagation을 사용해 이벤트 전파를 중단시켰습니다.
				`,
		imageUrl: [
			BASE_URL + "/assets/ukflix1.png",
			BASE_URL + "/assets/ukflix2.png",
			BASE_URL + "/assets/ukflix3.png",
			BASE_URL + "/assets/ukflix4.png",
			BASE_URL + "/assets/ukflix5.png",
		],
		tags: ["React", "Typescript", "Styled-Components", "React-query", "Frmaer-motion"],
		links: [
			{
				image: CHAIN_IMAGE,
				href: "https://ukheon.github.io/UkFlix/",
			},
			{
				image: GITHUB_IMAGE,
				href: "https://github.com/Ukheon/UkFlix",
			},
		],
	},
	{
		title: "사면이득",
		subtitle: "팀프로젝트 2021.10.01 ~ 2021.11.30",
		content: "개발자를 대상으로 만든 중고거래 웹사이트입니다.",
		detail: `
				<h4>2021.10.01 ~ 2021.11.30</h4>
				<h4>설명</h4>
				42Seoul에서 주최한 팀 프로젝트에 참여해 개발자를 위한 중고거래 사이트를 제작했습니다.
				<h4>팀 구성원</h4>
				프론트엔드 2명, 백엔드 2명으로 구성된 팀이었고, 주로 React와 Spring을 사용했습니다.
				<h4>기술 선정 이유</h4>
				우리 팀 구성원들은 모두 첫 프로젝트였기 때문에 리딩 가능한 다른 기술이 없어서 HTML과 JavaScript로 직접
				개발하는 대신에 React를 경험해보기로 결정했습니다.
				<h4>담당</h4>
				1. 프론트엔드 포지션을 담당했고 프로젝트 배포를 위해 AWS EC2, Route53, 가비아를 사용하여 프로젝트를 배포했습니다.
				<br />
				2. 메인 화면 UI, 42OAuth연동, 상품 페이지 UI, fileReader사용해 상품 등록/삭제를 구현했습니다.
				<br />
				3. useMediaQuery를 사용해 모바일 view 컴포넌트를 따로 제작하였습니다.
				<h4>어려웠던 점</h4>
				HTML, CSS, JavaScript의 지식이 부족한 상태에서 React로 개발을 진행하다보니 간단한 퍼블리싱부터 문제가 발생했습니다. 
				그래서 네이버, 다음, 카카오톡, 야후 등의 페이지를 클론 코딩하며 HTML과 CSS를 공부하였습니다. 웹 개발이 처음이라 
				커뮤니케이션이 어려웠고, 특정 기능을 구현하기 위해 클라이언트와 서버 중 어느 쪽에서 구현해야 하는지에 대한 기획이 오래 걸렸습니다.
				기술 리딩을 받지 않고 진행했기 때문에 AWS S3에 이미지를 클라이언트에서 처리하는 과정에서 페이지 전환이 발생하면 DB에는 남아있지만
				S3에는 올라가지 않는 문제가 발생했습니다. 이후에는 이 문제를 직접 해결하기 위해 서버에서 처리하는 방식을 적용하는 등의 수정 작업으로 시간을 소모하였습니다.
				`,
		imageUrl: [
			BASE_URL + "/assets/4m2d1.png",
			BASE_URL + "/assets/4m2d2.png",
			BASE_URL + "/assets/4m2d3.png",
			BASE_URL + "/assets/4m2d4.png",
			BASE_URL + "/assets/4m2d5.png",
		],
		tags: ["React", "Styled-Components"],
		links: [
			{
				image: YOUTUBE_IMAGE,
				href: "https://youtu.be/SUgFXB02Gdw",
			},
			{
				image: GITHUB_IMAGE,
				href: "https://github.com/ukhyo/42marketFront",
			},
		],
	},
];
