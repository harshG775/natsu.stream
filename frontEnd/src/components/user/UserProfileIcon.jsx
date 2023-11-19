import "./userProfileIcon.css"
import { Icon } from "@iconify/react";
import BTN from "../buttons/BTN";
export default function UserProfileIcon () {
	const user = true
	return (
		<div className="user-profile-icon-container">
			{user ? (
				<>
					<button className="userIcon">
						<Icon icon="prime:user" />
					</button>
					<ul className="links">
						<li>
							<a href="">Profile</a>
						</li>
						<li>
							<a href="">Log Out</a>
						</li>
					</ul>
				</>
			) : (
				<>
					<BTN>Login</BTN>
					<BTN>SignUp</BTN>
				</>
			)}
		</div>
	);
}