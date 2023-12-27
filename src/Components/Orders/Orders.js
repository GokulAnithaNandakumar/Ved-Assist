import "./Orders.css"
import { useState } from "react";
import Logo from "../Shop/Logo.png";
import Avatar from "../Shop/avatar.jpg";
import OrderCard from "./OrderCard";
import axios from "axios";

function Orders() {
    const [orders, setOrders] = useState([]);
    const logout = () =>{
        localStorage.removeItem('vedtoken');
        window.location.replace('/');
    }

    window.onload = async (event) => {
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/history",
            data: {
                "uname" : localStorage.getItem("uname"),
                "token" : localStorage.getItem("vedtoken")
            },
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            },
           
        })
        .then(res=>{
            console.log("Successful");
            console.log(res.data.orders);
            setOrders(orders);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })
    };

    return (
        <>
            <div className="shop">
                <div className="shop-nav">
                    <div className="logo">
                        <a href="/"><img src={Logo} /></a>
                    </div>
                    <button type="submit" onClick={(e)=>{e.preventDefault();window.location.replace("/shop");}}>Go to Shop</button>
                    <div class="action">
                        <div class="profile">
                            <img src={Avatar} />
                        </div>
                        <div class="menu">
                            <h3>{localStorage.getItem("uname")}</h3>
                            <ul>
                            <li>
                                <a href="#"><i class="fa fa-history" aria-hidden="true"></i> Order History</a>
                            </li>
                            <li>
                                <a  onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>   
                <div className="shop-container">
                    <h1 className="heading">Orders</h1>
                    <h2>Here are your past orders</h2>
                    {/* <p className="caution-mssg">Make sure to read the description before buying</p> */}
                    <div className="orders-row">
                    {
                            orders.map((order) => (
                                <OrderCard name={order.name} price={order.price} date={order.date} id={order.id} />
                            ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;