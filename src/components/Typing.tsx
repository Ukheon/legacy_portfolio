import { blinkAnimation } from "@/styles/animation";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Typing = ({ typingText }: { typingText: string }) => {
	const [text, setText] = useState(""); // 타이핑할 텍스트 상태 관리
	const [index, setIndex] = useState(0); // 현재 타이핑 중인 텍스트 인덱스 상태 관리

	const typingSpeed = 100; // 타이핑 속도 (밀리초 단위)

	useEffect(() => {
		const timer = setTimeout(() => {
			setText(typingText.substring(0, index + 1));
			setIndex(index + 1);
		}, typingSpeed);

		return () => clearTimeout(timer);
	}, [index]);
	return <TextStyled>{text}</TextStyled>;
};

const TextStyled = styled.span`
	border-right: 5px solid transparent;
	padding-right: 10px;

	animation: ${blinkAnimation} 1s step-end 8;
`;
