import React, {FC} from "react";
import './NavBar.css'
const NavBar: FC = (): JSX.Element => {
    return (<nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Algorithms</li>
            <li className="navbar-item">Games</li>
            <li className="navbar-item">Me</li>
        </ul>
    </nav>)
};

export default NavBar;
