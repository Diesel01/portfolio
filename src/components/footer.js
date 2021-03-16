import React from "react"; 
import { footer, textDiv, footerP, address, logoImg  } from "../styles/Footer.module.css";

export default class Footer extends React.Component{ 
    constructor(){ 
        super()
    }

    render(){
        return(
            <footer className = {footer}>
                <div className = {textDiv}>
                    <p className = {footerP}>
                        Website made with <img src = "../imgs/coffee.svg" width = "50px" height = "50px" alt = "Coffee icon"/> 
                        and <img src = "../imgs/react.svg" width = "50px" height = "50px" alt = "React Icon"/> 
                    </p>

                    <address className = {address}> 

                    </address>
                </div>

                <img src = '../imgs/logo.png' alt = "Matheus Diesel's logo" className = {logoImg}></img>
            </footer>
        )
    }
}