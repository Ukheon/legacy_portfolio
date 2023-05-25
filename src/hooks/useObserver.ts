import { useEffect, useState } from "react";

export const useObserver = (id: string) => {
	const [isIntersection, setIsIntersection] = useState(false);
	useEffect(() => {
		const section = document.getElementById(id);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsIntersection(true);
					}
				});
			},
			{ threshold: 0.4, rootMargin: `-20px 0px -20px 0px` }
		);

		observer.observe(section!);

		return () => {
			observer.unobserve(section!);
		};
	}, [id]);

	return { isIntersection };
};
