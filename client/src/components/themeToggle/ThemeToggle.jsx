import "./themeToggle.css"

export default function ThemeToggle(prop) {
    const root = document.getElementById("root");
    function toggleHandle() {
        root.classList.toggle("dark-mode");
    }
    return <button onClick={toggleHandle}>{prop.children}</button>;
}
