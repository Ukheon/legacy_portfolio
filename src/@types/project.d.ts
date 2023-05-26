interface IProjectProps {
	data: IProjectData;
	index: number;
	current: number;
	nextCurrent: () => void;
	prevCurrent: () => void;
	isIntersection: boolean;
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

interface ILink {
	href: string;
	image: string;
}
