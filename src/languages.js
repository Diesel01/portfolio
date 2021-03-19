const en = {
    greetings: "Hello World!", 

    description: "My name is Matheus Diesel, and I am a web developer", 

    firstH3: "About me", 

    aboutMe: `I have a B.A in Philosophy and a passion for web development! 
      As a self-taught developer, my skils are aimed towards front-end development, specially using frameworks such as React, Angular and jQuery. 
      I also have a strong interest in web design and some experience with Node.js.`,
      
    secondH3: "Web development",  

    webDevProjects: [
        { name: "Pending", 
          description: "Pending is a task and project manager that allows you to set importance to each items, as well as a final due date.", 
          tech: "Node package manager, Git, vanilla Javascript, Webpack compiler, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/todo_list", 
          live: "https://github.com/Diesel01/todo_list/dist/index.html",
          img: "./imgs/pending.png"
        }
    ]
};

const de = { 
    greetings: "Hallo Welt!", 

    description: "Mein Name ist Matheus Diesel, und ich bin ein Webentwickler",

    firstH3: "Über mich", 

    aboutMe: `Ich habe ein Diplom in Philosophie und eine Passsion für Webentwicklung! 
      Als ein autodiktat Entwickler, besitze ich die Fähigkeiten, gute und "clean" Frontendcode zu schreiben, insbesondere mit Frameworks wie React, Angular und jQuery. 
      Ich habe auch ein großes Interesse für Webdesign und Erfahrung mit Node.js.`, 

    secondH3: "Webentwicklung",  

    webDevProjects: [ 
        { name: "Pending", 
          description: "Pending is a task and project manager that allows you to set importance to each items, as well as a final due date.", 
          tech: "Node package manager, Git, vanilla Javascript, Webpack compiler, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/todo_list", 
          live: "https://github.com/Diesel01/todo_list/dist/index.html",
          img: "./imgs/pending.png"
        }
    ]
}

export {en, de}