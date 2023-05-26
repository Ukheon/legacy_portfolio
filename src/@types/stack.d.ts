interface IContent {
	title: string;
	info: string;
	image: string;
}

interface IStack {
	title: string;
	time: string;
	content: IContent[];
}

interface IStackData {
	[key: string]: IStack;
}
