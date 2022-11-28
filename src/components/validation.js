import { React, useState } from "react";
import axios from "axios";

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
    let validmail="";
    e.preventDefault()
    axios.get("https://raw.githubusercontent.com/GovindVermagkv/JSON/main/email")
      .then((responce) => {
        let result = responce.data;
        result.map((emails) => {
          if (emails.email === formdata.Email) {
            validmail+=(emails.email)

          }

        })
        if(validmail===formdata.Email){
          alert("matched")
          setIsSubmit(true)
        }
        else{
          alert("not matched")
          setIsSubmit(false)
        }
      })
  }


  return (
    <>
      {isSubmit ? <WheelPage /> :
        <div id="validation_container">

          <div id="input_area">
            <h1>Please Enter You Email to continue...</h1>
            <div>

              <input type={"Email"} placeholder="Enter email" name="Email" value={formdata.Email} onChange={HandleChange} />
              <button onClick={HandleSubmit}>Sign In</button>
            </div>

          </div>
        </div>
      }
    </>
  )
}
export default Validation;