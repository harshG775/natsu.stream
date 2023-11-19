import "./logo.css"
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function Logo() {
    return (
        <Link className="main-logo" to={"/"}>
            <span>
                <Icon icon="fa6-solid:dragon"/>
            </span>
            <span>Dragneel</span>
        </Link>
    );
}
