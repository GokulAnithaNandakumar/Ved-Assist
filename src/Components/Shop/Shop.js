import "./Shop.css";
import Medicine from "../Predict/Medicine/Medicine";
import Navbar from "../Main/Navbar/Navbar";
import Logo from "./Logo.png";
import Avatar from "./avatar.jpg";
import axios from "axios";
import { useState } from "react";
import Checkout from "../Checkout/Checkout";

function Shop() {
    const [spinner, setSpinner] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({});
    const togglePopup = (data) => {
        setIsOpen(!isOpen);
        setData(data);
    }

    const logout = () =>{
        localStorage.removeItem('vedtoken');
        window.location.replace('/');
    }
    const [searchText , setSearchText] = useState("");
    const [medicines, setMedicines] = useState([]);
    var handleSearch = async () =>{
        var Search = new FormData();
        Search.append("uname", localStorage.getItem("uname"));
        Search.append("token", localStorage.getItem("vedtoken"));
        Search.append("searchText", searchText);
        setSpinner("loader");
        await axios({
            method: "POST",
            url: "https://vedassist-kil3.onrender.com",
            data: Search,
            headers: {
                'accept': 'application/json',
                'content-type':'multipart/form-data',
            },
        })
        .then(res=>
            {
                setSpinner("");
                setMedicines(res.data.medicines);
            })
            .then(err =>{
            })
    }
    window.onload = async (event) => {
        setSpinner("loader");
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/shop",
            data: [],
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            },
           
        })
        .then(res=>{
            setSpinner("");
            setMedicines(res.data.medicines);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })
    };

    return (
        <> 
            {isOpen && <Checkout togglePopup={togglePopup} data={data} />}            
            <div className="shop">
                <div className="shop-nav">
                    <div className="logo">
                        <a href="/"><img src={Logo} /></a>
                    </div>
                    <div className="search">
                        <input type="text" name = "searchText" value = {searchText} onChange = {(e)=>setSearchText(e.target.value)} placeholder="Search.." />
                        <button type="submit" onClick={handleSearch}><i class="fa fa-search"></i></button>
                    </div>
                    <div class="action">
                        <div class="profile">
                            <img src={Avatar} />
                        </div>
                        <div class="menu">
                            <h3>{localStorage.getItem("uname")}</h3>
                            <ul>
                            <li>
                                <a href="/shop/orders"><i class="fa fa-history" aria-hidden="true"></i> Order History</a>
                            </li>
                            <li>
                                <a  onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>   
                <div className="shop-container">
                    <h1 className="heading">Shop</h1>
                    <h2>One stop for all your Ayurvedic medicines</h2>
                    <p className="caution-mssg">Make sure to read the description before buying</p>
                    <div className="loader-div">
                        <div className={spinner}></div>
                    </div>
                    <div className="medicines-row">
                    {
                        medicines.map((med) => (
                            <Medicine data={med} togglePopup={togglePopup} />
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;