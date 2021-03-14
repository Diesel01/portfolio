import React from "react";
import { mainHeader, headerDiv, titleDiv, headerNav, navLinks } from "../styles/Header.module.css";

export default class Header extends React.Component{ 
    render(){ 
        const {greetings, description} = this.props; 

        return(
            <header className = {mainHeader}> 
                <div className = {headerDiv}>
                    <div className = {titleDiv}>
                        <h1>{greetings}</h1>
                        <h2>{description}</h2>
                    </div>
                    <img src = "../imgs/profilePic.png" alt = 'Profile' />
                </div>
               
                <nav className = {headerNav}>
                    <a className = {navLinks} href = "https://github.com/Diesel01" target="_blank" rel="noreferrer">GitHub</a>
                    <a className = {navLinks} href = "mailto=matheusdiesel01@gmail.com" target="_blank" rel="noreferrer">Email</a>
                    <a className = {navLinks} href = "https://www.linkedin.com/in/matheus-diesel-werberich-25a8281b7/" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </header>
        )
    }
}