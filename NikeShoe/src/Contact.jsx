import React, { useState } from "react";
import Button from "./Button";
import calll from "./Images/Service 24_7-pana 1.svg";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import './Styles/Contact.css';

const Contact = () => {
    const[name,setname]=useState("name")
    const[mail,setmail]=useState("support@nike")
    const[textt,settextt]=useState("aoisndffoas")
    const OnSubmit=(event)=>{
        event.preventDefault();
       setname(event.target.name.value)
       setmail(event.target.email.value)
       settextt(event.target.text.value)
    }
    return (
        <div>
            <div style={{display:"inline-block"}}>
                <h1 className="contacthead">Contact Us</h1>
                <p className="contactp">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT,<br />
                OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,<br />
                OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="Contentmain">
                <div className="btnsection">
                    <Button  text="Via Text" icon={<LuMessagesSquare />} />
                    <Button text="Via Call" icon={<IoCallOutline />} />
                    <Button text="Via Email" isOutline="true" icon={<IoMailOpenOutline />} />
                     <div className="formcontrol">
                        <form action="" onSubmit={OnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" />
                    <label htmlFor="text">TEXT</label>
                    <textarea name="text"></textarea>
                        <Button  text="Submit" icon={<VscSend />}/>

                        <div>{name+"  "+mail+"  "+textt}</div>
                        </form>
                </div>
                </div>
               
                <div>
                    <img className="support" src={calll} alt="Service 24/7" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
