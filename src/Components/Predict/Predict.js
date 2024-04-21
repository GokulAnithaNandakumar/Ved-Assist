import "./Predict.css"
import Navbar from "../Main/Navbar/Navbar";
import Medicine from "./Medicine/Medicine";
import axios from "axios";
import { useState, useEffect } from "react";

function Predict() {
    const [medicines, setMedicines] = useState([]);
    const [spinner, setSpinner] = useState("");
    useEffect(() => {
        if (spinner==="loader")
            window.scrollTo(0, 200);
      }, [spinner]);
    var handleSubmit = async (e) => {
        e.preventDefault();
        var age = document.querySelector('#age').value;
        var gender = document.querySelector('#gender').value;
        var weight = document.querySelector('#weight').value;
        var data = {};
        if (age && gender && weight) {
            data = {
                "age": age,
                "gender": gender,
                "weight": weight, 
                "cold": (document.getElementById('Cold').checked)?1:0,
                "cough": (document.getElementById('Cough').checked)?1:0,
                "fever": (document.getElementById('Fever').checked)?1:0,
                "dizziness": (document.getElementById('Dizziness').checked)?1:0,
                "vomiting": (document.getElementById('Vomiting').checked)?1:0,
                "diarrhoea": (document.getElementById('Diarrhoea').checked)?1:0,
                "eyepain": (document.getElementById('Eyepain').checked)?1:0,
                "headache": (document.getElementById('Headache').checked)?1:0,
                "stomachPain": (document.getElementById('StomachPain').checked)?1:0,
                "chestPain": (document.getElementById('ChestPain').checked)?1:0,
                "jointPain": (document.getElementById('JointPain').checked)?1:0,
                "throatPain": (document.getElementById('ThroatPain').checked)?1:0
            }
            console.log(data);
            setSpinner("loader");
        }
        else {
            alert("Please fill all the fields");
        }
        await axios({
            method: "POST",
            url: "https://vedassist-kil3.onrender.com/predict",
            data: data,
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            },
           
        })
        .then(res=>{
            console.log("Successful");
            console.log(res.data.medicines);
            setSpinner("");
            setMedicines(res.data.medicines);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })
    }

    return (
        <>
            <Navbar />
            <div className="predict">
            <div className="container" id="container">
                <div className="form-container log-in-container">
                    <form name="predict-form">
                        <h1 className="heading">Predictor</h1>
                        <span>Get best Ayurvedic predictions without any side effects</span>
                        <div className="input-group">
                            <input type="number" id="age" placeholder="Age" required min="0" max="150" />
                            <select id="gender" name="gender" form="predict-form" defaultValue="" required>
                                <option value="" disabled>Gender</option>
                                <option value="3">Male</option>
                                <option value="4">Female</option>
                            </select>
                            <input type="number" id="weight" placeholder="Weight" step="0.01" min="0" max="500" required />
                        </div>
                        <div className="check-list-container">
                            <p>Selct your Symptoms</p>
                            <div className="check-list">
                                <div className="checkbox-wrapper-1">
                                    <input id="Cold" className="substituted" type="checkbox" aria-hidden="true"/>
                                    <label htmlFor="Cold">Cold</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Cough" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Cough">Cough</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Fever" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Fever">Fever</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Dizziness" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Dizziness">Dizziness</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Vomiting" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Vomiting">Vomiting</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Diarrhoea" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Diarrhoea">Diarrhoea</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Eyepain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Eyepain">Eyepain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Headache" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Headache">Headache</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="StomachPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="StomachPain">Stomach Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="ChestPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="ChestPain">Chest Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="JointPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="JointPain">Joint Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="ThroatPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="ThroatPain">Throat Pain</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit}>Predict Now</button>
                        <div className="predit-output">
                            <div className="loader-div">
                                <div className={spinner}></div>
                            </div>
                            <div className="medicines-row">
                                {medicines.map((med) => (
                                    <Medicine data={med} togglePopup={()=>{window.location.replace("/shop")}}/>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
	        </div>
            </div>

        </>
    );
}

export default Predict;