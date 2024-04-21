import Logo from "./Logo.png";
import lkdin from "./linkedIn.svg";
import twtr from "./twitter.svg";
import yt from "./youtube.svg";
import axios from "axios";

import { useState } from "react";

function Signup() {
    const [spinner, setSpinner] = useState("");
    const signup = async (e) =>{
        e.preventDefault();
        var username = document.querySelector('#username').value;
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        var confirmpassword = document.querySelector('#cpassword').value;
        var data = {"username": username, "email": email, "password": password , "confirm_password": confirmpassword};
        if (!(username && email && password  && confirmpassword ) ){
            alert("Please fill all the fields");
            return;
        }
        else if(!(email.includes("@")) ){
            alert("Please enter valid email");
            return;
        }
        else if(password !== confirmpassword  ){
            alert("Passwords do not match");
            return;
        }
        
        else{
            setSpinner("loader");
        await axios({
            method: "POST",
            url: "https://vedassist-kil3.onrender.com/register",
            data: data,
            headers: {
                'accept': 'application/json',
                'content-type':'multipart/form-data',
            },
        }).then(response =>
            {
                setSpinner("");
                alert("Verify your email address by clicking on the link sent to your mail");
                window.location.replace('/signin');
            })
            .catch(err => {
                alert(err.response.data.message);
            })
        }
    }

    return (
        <>
            <div className="loader-div">
                <div className={spinner}></div>
            </div>
            <div class="container" id="container">
                <div class="form-container log-in-container">
                    <form action="#">
                        <div className="nav">
                            <div className="logo">
                                <a href="/"><img src={Logo} /></a>
                            </div>
                            <div className="footer_middle_left_list">
                                <div className="footer_icons">
                                    <a href="https://www.linkedin.com">
                                        <img src={lkdin} alt={lkdin} /></a>
                                </div>
                                <div className="footer_icons">
                                    <a href="https://twitter.com/?lang=en">
                                        <img src={twtr} alt={twtr} /></a>
                                </div>
                                <div className="footer_icons">
                                    <a href="https://www.youtube.com/">
                                        <img src={yt} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <h1>Sign Up</h1>
                        <input type="text" placeholder="Username*" id = "username" required/>
                        <input type="email" placeholder="Email*" id ="email" required/>
                        <input type="password" placeholder="Password*" id = "password" required/>
                        <input type="password" placeholder="Confirm Password*" id = "cpassword" required/>
                        <button type="submit" onClick={signup}>Sign Up</button>
                        <span>Already have an account? <a href="/signin">Sign in now</a></span>
                    </form>
                </div>
	        </div>
        </>
    );
}

export default Signup;