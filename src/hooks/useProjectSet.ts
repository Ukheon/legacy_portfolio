import { useEffect, useState } from "react";

export const useProjectSet = () => {
	const [selectImg, setSelectImg] = useState(0);
	const [animate, setAnimate] = useState(false);
	const [showDetail, setShowDetail] = useState(false);
	const [expandImageToggle, setExpandImageToggle] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, [selectImg]);

	const handleExpandToggle = () => setExpandImageToggle((state) => !state);

	const handleSubImageClick = (idx: number) => setSelectImg(idx);

	const handleDetailButtonClick = () => setShowDetail((state) => !state);

	const handleAnimationEnd = () => setAnimate(false);

	return {
		selectImg,
		showDetail,
		handleDetailButtonClick,
		animate,
		handleAnimationEnd,
		handleSubImageClick,
		expandImageToggle,
		handleExpandToggle,
	};
};
