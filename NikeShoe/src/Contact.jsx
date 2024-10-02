import React from "react";
import Nav from "./Nav";
import Button from "./Button";
import calll from "./Images/Service 24_7-pana 1.svg"
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import './Styles/Contact.css'
import { IoMailOpenOutline } from "react-icons/io5";
const Contact=()=>{
    return (
        <div>
            <div  >
           <h1>Contact Us</h1>
           <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT,<br /> OR JUST WANT TO CHAT , 
            YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,<br /> OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
           </div>
           <div className="Contentmain">
                <div className="btnsection" >
                    <Button text="Via Text" icon={<LuMessagesSquare />}/>
                    <Button text="Via Call" icon={<IoCallOutline />}/>

                <Button text="Via Email " isOutline="true" icon={<IoMailOpenOutline />} />
                </div>
                
                <div>
                    <img src={calll} alt="" />
                </div>
           </div>
        </div>
    )
}
export default Contact;