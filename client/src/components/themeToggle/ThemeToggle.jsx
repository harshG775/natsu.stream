import "./themeToggle.css"

export default function ThemeToggle(prop) {
    const elements = document.querySelectorAll('[data="theme"]');
    function toggleHandle() {
        elements.forEach(element => {
            element.classList.toggle("light-mode");
        });
    }
    return <button onClick={toggleHandle}>{prop.children}</button>;
}
