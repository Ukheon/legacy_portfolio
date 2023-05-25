import styled from "styled-components";

export const Footer = () => {
	return <FooterSectionStyled>Copyright ⓒ 2023. KwonUkheon All rights reserved</FooterSectionStyled>;
};

const FooterSectionStyled = styled.footer`
	height: 7.5rem;
	line-height: 7.5rem;
	font-size: 0.8rem;
	text-align: center;
	font-weight: 700;
`;
