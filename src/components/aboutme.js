import React from "react"; 
import { secondH3, h3Div, backgroundDivH3, aboutMeParagraphDiv, aboutMeText } from "../styles/Aboutme.module.css";

export default class AboutMe extends React.Component{ 
    render(){ 
        const {aboutMe, firstH3} = this.props; 
        return(
            <div>
                <div className = {h3Div}> 
                    <div className = {backgroundDivH3}> 
                        <h3 className = {secondH3}>{firstH3}</h3> 
                    </div>
                </div>  

                <div className = {aboutMeParagraphDiv}>
                    <p className = {aboutMeText}>{aboutMe}</p>
                </div> 
            </div>
        )
    }
} 