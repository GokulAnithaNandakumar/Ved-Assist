import { useState } from "react";
import Logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [menuIcon, setMenuIcon] = useState("fa fa-bars");
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        if (menuIcon==="fa fa-bars")
            setMenuIcon("fa fa-times");
        else
            setMenuIcon("fa fa-bars");
    }

    return (
        <>
            <nav id="my-nav">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="menu-bar" onClick={handleShowNavbar}>
                    <i className={menuIcon}></i>
                </div>
                <ul className={(showNavbar)?'nav-links active':'nav-links'}>
                    <li><a href="/#home" onClick={handleShowNavbar}>Home</a></li>
                    <li><a href="/#about" onClick={handleShowNavbar}>About</a></li>
                    <li><a href="/#team" onClick={handleShowNavbar}>Team</a></li>
                    <div className="mob-btn-grp">
                        <button onClick={event =>  window.location.href='predict'}>Predict</button>
                        <button onClick={event =>  window.location.href='/shop'}>Shop</button>
                    </div>
                </ul>
                <div className="btn-grp">
                    <button type="submit" onClick={event =>  window.location.href='/predict'}>Predict</button>
                    <button type="submit" onClick={event =>  window.location.href='/shop'}>Shop</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;