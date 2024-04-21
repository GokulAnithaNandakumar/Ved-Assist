import { useState } from "react";
import "./Checkout.css";
import axios from "axios";

function Checkout({togglePopup, data}) {
   const handleSubmit = async (data) => {
    let info = {
      "uname" : localStorage.getItem("uname"),
      "prodName" : data.name,
      "price" : data.price,
      "doorNo" : document.querySelector("#doorNo").value,
      "street" : document.querySelector("#street").value,
      "city" : document.querySelector("#city").value,
      "pincode" : document.querySelector("#pincode").value
    }
    await axios({
        method: "POST",
        url: "https://vedassist-kil3.onrender.com/buy",
        data: info,
        headers: {
            'accept': 'application/json',
            'content-type': 'multipart/form-data',
        },
       
    })
    .then(res=>{
        console.log("Successful");
        alert(res.data.message);
        togglePopup();
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })
};

    return (
        <>
          <div className="popup-box">
            <form>
              <h1>Checkout</h1>
              <div className="checkout-items">
                <div className="inputs">
                    <h2>Delivery Address</h2>
                    <input type="text" id="doorNo" placeholder="Door No./Building No." />
                    <input type="text" id="street" placeholder="Street Name" />
                    <input type="text" id="city" placeholder="City" />
                    <input type="text" id="pincode" placeholder="Pincode" />
                  </div>
                <div className="summary">
                  <h2>Order Summary</h2>
                  <div className="details">
                    <table>
                      <tr>
                        <td><b>Name</b></td>
                        <td><b>Price</b></td>
                      </tr>
                      <tr>
                        <td>{data.name}</td>
                        <td>Rs. {data.price}/-</td>
                      </tr>
                    </table>
                    <hr />
                    <b>Total Price : Rs. {data.price}/-</b>
                  </div><br/>
                  <button onClick={(e)=>{e.preventDefault();handleSubmit(data)}}>Confirm Order</button> <br /> <br />
                  <a onClick={togglePopup}>Cancel Order</a>
                </div>
              </div>
            </form>
          </div>
        </>
    );
}

export default Checkout;