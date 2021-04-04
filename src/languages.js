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
        }, 

        { 
          name: "Livre-arbítrio e responsabilidade", 
          description: `"Livre-arbítrio e responsabilidade" is a website created for the Pedagogical Residency in Philosophy. 
            In it, the user has access to an interactive story, where they can make choices that alter the story's progress. 
            The objective of this website is to introduce key concepts in Ethics for highschool students`, 
          tech: "Firebase, Git, vanilla Javascript, Webpack, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/Solo-RPG", 
          live: "https://solo-rpg-rp.web.app/",
          img: "./imgs/solorpg.png"
        }, 

        { 
          name: "Song-finder", 
          description: `Song-finder is an application to search songs through iTunes' API.  It returns a 30 seconds demo and an album cover.`, 
          tech: "Vanilla Javascript, Webpack, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/song-finder", 
          live: "https://diesel01.github.io/song-finder/",
          img: "./imgs/songfinder.png"
        }, 
    ]
}

export {en, de}