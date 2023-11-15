import "./ThemeToggle.css"
import {Icon} from "@iconify/react"
import { useState,useEffect } from "react";
export default function ThemeToggle() {
	const elements = document.querySelectorAll('[data="theme"]');

    const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme || "light";
	});

	useEffect(() => {
		if (theme === "dark") {
			elements.forEach(element => {
                element.classList.remove("dark-mode");
                element.classList.add("light-mode");
            });
		} else {
			elements.forEach(element => {
                element.classList.add("dark-mode");
                element.classList.remove("light-mode");
            });
		}
	}, [elements,theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};
    return(
        <div className="theme-toggle-container">
			<button data="theme" onClick={toggleTheme}>
                <Icon icon={theme==="dark"?"line-md:moon-rising-alt-loop":""}/>
                <Icon icon={theme==="light"?"line-md:sun-rising-loop":""}/>
			</button>
		</div>
    )
    
}
