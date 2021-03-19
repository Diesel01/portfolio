import React from "react";
import {en, de} from "./languages.js"; 
import Header from './components/header.js'
import AboutMe from "./components/aboutme.js";
import WebDev from "./components/webDev.js";

import { secondH3, h3Div, backgroundDivH3 } from "./styles/App.module.css";

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = { lang: en }
    }

  componentDidMount(){ 
    if (navigator.language === "de-DE" || "de-AT" || "de-CH"){ 
      document.documentElement.lang = "de";
      this.setState({ lang: de })
    }
    // else if (navigator.language === "pt-BR" || "pt-PT"){ 
    //   return 
    // }
  }
  
  render(){
    return(
       <>

        <Header greetings = {this.state.lang.greetings} description = {this.state.lang.description} />
        
        <section> 
          <AboutMe aboutMe = {this.state.lang.aboutMe} firstH3 = {this.state.lang.firstH3} />
        </section>
       
        <section>
          <div className = {h3Div}>
            <div className = {backgroundDivH3}>
              <h3 className = {secondH3}>{this.state.lang.secondH3}</h3>
            </div>
          </div>

          {this.state.lang.webDevProjects.map((project, index) => { return (<WebDev {...project} key = {project.index}/>) })}
        </section> 
      
      </>
    )
  }
}

export default App;
