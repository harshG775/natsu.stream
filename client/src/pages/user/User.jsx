import ThemeToggle from "../../components/themeToggle/ThemeToggle";

export default function UserPage() {
    return (
        <div className="body">
            <header>
                <h2><img src="user" alt="user" /></h2>
                <p>username</p>
                <p>Name</p>
                <p>email</p>
            </header>
            <main>
            <h1>Settings</h1>
            <ul>
                <li><Theme/></li>
                <li>other settings</li>
            </ul>
            </main>
        </div>
    );
}
function Theme() {
    return (
        <div className='theme-toggle'>
            <ThemeToggle>
                <i className='fa-solid fa-circle-half-stroke'></i>
                THEME
            </ThemeToggle>
        </div>
    );
}
