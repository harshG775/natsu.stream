import "./themeToggle.css"

export default function ThemeToggle(prop) {
    const elements = document.querySelectorAll('[data="theme"]');
    console.log(elements)
    function toggleHandle() {
        elements.forEach(element => {
            element.classList.toggle("dark-mode");
        });
    }
    return <button onClick={toggleHandle}>{prop.children}</button>;
}
