import React from "react";
import { projectPicture, projectTextDiv, projectArticle, projectParagraph } from "../styles/WebDev.module.css";

export default class WebDev extends React.Component{ 
    render(){ 
        const { name, description, tech, repo, live, img } = this.props;

        return (
            <article className = {projectArticle}>
                <div>
                    <img src = {img} alt = {name} loading = "lazy" className = {projectPicture} ></img>
                </div>

                <div className = {projectTextDiv}> 
                    <p className = {projectParagraph}> {description} </p>
                    <p className = {projectParagraph}> <i> <b> Technologies used: </b></i> {tech} </p>
                    <p className = {projectParagraph}> <i> <b> Repo: </b></i> <a href = {repo} target = '_blanck' rel="noreferrer">{repo}</a> </p>
                    <p className = {projectParagraph}> <i> <b> Live: </b></i> <a href = {live} target = '_blanck' rel="noreferrer">{live}</a> </p>
                </div>
            </article>
        )
    }
}