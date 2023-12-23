import "./Shop.css";
import Medicine from "../Predict/Medicine/Medicine";
import Navbar from "../Main/Navbar/Navbar";
import Logo from "./Logo.png";
import Avatar from "./avatar.jpg";

function Shop() {
    return (
        <>             
            <div className="shop">
                <div className="shop-nav">
                    <div className="logo">
                        <a href="/"><img src={Logo} /></a>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search.." />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <div class="action">
                        <div class="profile"> /* onclick="menuToggle();" */
                            <img src={Avatar} />
                        </div>
                        <div class="menu">
                            <h3>Username</h3>
                            <ul>
                            <li>
                                <img src="" /><a href="#"><i class="fa fa-history" aria-hidden="true"></i> Order History</a>
                            </li>
                            <li>
                                <img src="" /><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>   
                <div className="shop-container">
                    <h1 className="heading">Shop</h1>
                    <h2>One stop for all your Ayurvedic medicines</h2>
                    <p>Make sure to read the description before buying</p>
                    <div className="medicines-row">
                            <Medicine />
                            <Medicine />
                            <Medicine />
                            <Medicine />
                            <Medicine />
                            <Medicine />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;