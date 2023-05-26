import styled from "styled-components";

interface IRes {
	color: string;
	bgColor: string;
	text: string;
}

const openLink = (url: string) => {
	window.open(url);
};

export const LinkButton = ({ links }: { links: ILink[] }) => {
	const createLinkOption = (imageUrl: string) => {
		let resultObject: IRes = {
			color: "#000000",
			bgColor: "#ffffff",
			text: "",
		};
		if (imageUrl.match("chain")) {
			resultObject.color = "black";
			resultObject.text = "사이트 바로가기";
		} else if (imageUrl.match("youtube")) {
			resultObject.text = "YouTube";
		} else if (imageUrl.match("github")) {
			resultObject.text = "GitHub";
		}

		return resultObject;
	};

	return (
		<LinkSectionStyled>
			{links.map((data, idx) => {
				const option = createLinkOption(data.image);
				return (
					<LinkStyled
						key={idx}
						url={data.image}
						color={option.color}
						backColor={option.bgColor}
						onClick={() => openLink(data.href)}
					>
						{option.text}
					</LinkStyled>
				);
			})}
		</LinkSectionStyled>
	);
};

const LinkSectionStyled = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	flex-flow: wrap;
`;

const LinkStyled = styled.div<{ url: string; color: string; backColor: string }>`
	margin-right: 10px;
	font-weight: 700;
	padding: 0 15px 0 35px;
	height: 2rem;
	line-height: 2rem;
	font-size: 0.8rem;
	color: ${({ color }) => color};
	background-image: url(${({ url }) => url});
	background-size: 20px 20px;
	background-repeat: no-repeat;
	background-position: 8px 50%;
	background-color: ${({ backColor }) => backColor};
	cursor: pointer;

	&:hover {
		filter: invert(10%);
	}
`;
