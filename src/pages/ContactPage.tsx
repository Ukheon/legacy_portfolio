import { Snowflake } from "@/components/Snowflake";
import { Title } from "@/components/Title";
import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "styled-components";

export const ContactPage = () => {
	return (
		<ContactSection>
			<Snowflake />
			<SectionLayout id='contact' height={"70vh"}>
				<Title title={"CONTACT"} />
				<ContactSection>
					<p>
						<span>LOCATION</span> 서울시 성동구
					</p>
					<p>
						<span>EMAIL</span> dnrgjs33@gmail.com
					</p>
					<p>
						<span>GITHUB </span> https://github.com/Ukheon
					</p>
				</ContactSection>
			</SectionLayout>
		</ContactSection>
	);
};

const ContactSection = styled.section`
	background-repeat: no-repeat;
	background-color: transparent;
	position: relative;
	width: 100%;
	align-items: center;
	> p {
		background-color: transparent;
		background-image: none;
		background-size: cover;
		height: 50px;
		line-height: 50px;
		position: relative;
		padding-left: 30px;
		> span {
			width: 120px;
			display: inline-block;
		}
		&::before {
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			left: 0;
			margin-right: 20px;
			content: "";
			width: 5px;
			height: 5px;
			background-color: white;
		}
	}
`;
