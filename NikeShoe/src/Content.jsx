import React from "react";
import { createRoot } from "react-dom/client";
import Shoe from './Images/shoe_image.png'
import flip from './Images/flipkart.png'
import ama from './Images/amazon.png'
import './Styles/Content.css'
const Content=()=>{
return(
    <div className="Contentmain">
        <div>
            <div className="textt">
                       <h1 className="contenth1">YOUR FEET <br />
                        DESERVE <br />
                        THE BEST</h1>
             </div>
            <div>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
                    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
                    THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
                    SHOES.
                </p>
            </div>
            <div className="btnn">
                <button
                className="Shop">Shop now</button><button className="Category">Category</button>
            </div>
            <div>
                <footer>Also Available in </footer>
                <img src={flip} alt="" />
                <img src={ama} alt="" />

            </div>
        </div>
        <div><img  className="shoe" src={Shoe} alt="" /></div>
    </div>
)
}
export default Content;