import React, {useState, FC} from "react";
import './NavBar.css'


const items = [{label: 'home'}, {label: 'me'}, {label: 'algorithms'}, {label: 'games'}]

const NavBar: FC = (): JSX.Element => {
    const [activeItem, setActiveItem] = useState('')
    const handleNavItemClick = (event: any, item: string) => {
        setActiveItem(item)
        console.log(activeItem);
    }


    return (<nav className="nav">
        {items.map((item) =>
            (<div className="nav-item-wrapper">
                <li className={activeItem === item.label ? "nav-item active" : "nav-item"}
                    onClick={(e) => handleNavItemClick(e, item.label)}>{item.label}
                </li>
                <span className={activeItem === item.label ? "long-stick" : "short-stick"}></span>
            </div>)
        )}
    </nav>)

}

export default NavBar;
