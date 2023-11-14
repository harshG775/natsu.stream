import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
export default function ThemeToggle() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme || "light";
	});

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<div className=' fixed bottom-24 right-8'>
			<button
				onClick={toggleTheme}
				className={`
                dark:-bg--clr-neutral-100
                dark:-text--clr-neutral-900

                -bg--clr-neutral-900
                -text--clr-neutral-100
                rounded-full
                p-2
                font-bold
                `}>
				<Icon className=' w-6 h-6' icon='line-md:light-dark-loop' />
			</button>
		</div>
	);
}
