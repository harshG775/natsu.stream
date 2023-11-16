import "./topNavbar.css"
import {Icon} from "@iconify/react"
import SearchBar from "../../components/searchBar/SearchBar";
export default function TopNavbar() {
    return (
		<header className="top-navbar">
			<ul>
				<li>
					<Logo/>
				</li>
				<li>
					<SearchBar/>
				</li>
				<li>
					<UserProfileIcon/>
				</li>
			</ul>
		</header>
	);
}



function Logo () {
	return <div>Logo</div>;
}
function UserProfileIcon () {
	return (
		<>
			<Icon icon="prime:user" />
		</>
	);
}