import "./pagination.css"
export default function Pagination() {
    return (
        <nav className='pagination'>
            <ul>
                <li className='previous'>previous</li>
                <li className='numbers'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </li>
                <li className='next'>next</li>
            </ul>
        </nav>
    );
}
