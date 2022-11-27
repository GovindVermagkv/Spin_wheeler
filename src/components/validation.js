import {React, useState } from "react";

import WheelPage from "./WheelPage";

import './validation.css';

function Validation() {
  const [formdata, SetformData] = useState({
    "Email": "",
 })


  const HandleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    const { name, value } = e.target

    SetformData({ ...formdata, [name]: value })
  }

  const [isSubmit, setIsSubmit] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (!formdata.Email.endsWith(".com")) {

      setIsSubmit(false)
      alert("invalid email")
    }
    else {
      setIsSubmit(true)
    }

  }

return(
    <>
    {isSubmit ? <WheelPage /> : 
        <div id="validation_container">
         
            <div id="input_area">
            <h1>Please Enter You Email to continue...</h1>
            <div>
            
            <input type={"Email"} placeholder="Enter email" name="Email" value={formdata.Email} onChange={HandleChange}/>
                <button onClick={HandleSubmit}>Sign In</button>
            </div>
               
            </div>
        </div>
    }
    </>
)
}
export default Validation;