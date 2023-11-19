import "./topNavbar.css"
import {Icon} from "@iconify/react"
import SearchBar from "../../components/searchBar/SearchBar";
import Logo from "../../components/logo/Logo";
import UserProfileIcon from "../../components/user/UserProfileIcon";
export default function TopNavbar() {
    return (
		<header className="top-navbar">
			<ul>
				<li>
					<Icon icon="material-symbols:menu-open-rounded"/>
				</li>
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