const en = {
    greetings: "Hello World!", 

    description: "My name is Matheus Diesel, and I am a web developer", 

    firstH3: "About me", 

    aboutMe: `I am currently an undergraduate Philosophy student at the Federal University of Santa Maria (UFSM), Brazil.
      As a member of the Philosophy of Memory Lab, my research is focused on episodic memory, metacognition and their phenomenology.
      I'm also interested in metaphysics of time, philosophy of mind and philosophy teaching.
      I also have experience with web development and design. One of my previous works includes the layout for Voluntas: International Journal of Philosophy.`,
      
    secondH3: "Web development",  

    webDevProjects: [
        { name: "Pending", 
          description: "Pending is a task and project manager that allows you to set importance to each items, as well as a final due date.", 
          tech: "Node package manager, Git, vanilla Javascript, Webpack compiler, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/todo_list", 
          live: "https://github.com/Diesel01/todo_list/dist/index.html",
          img: "../imgs/pending.png"
        }
    ]
};

const de = { 
    greetings: "Hallo Welt!", 

    description: "Mein Name ist Matheus Diesel, und ich bin ein Webentwickler",

    firstH3: "Über mich", 

    aboutMe: `Ich studiere derzeit Philosophie auf der Bundesuniversität Santa Maria (UFSM), Brasilien. 
      Als Mitglied von dem Lab von Philosophie des Gedächtnisses, meine Forschung fokussiert sich auf episodische Gedächtnis und Metakognition.
      Auch interessiere ich mich auf die Metaphysik der Zeit, Philosophie des Geistes und Philosophieunterricht.
      Ich habe auch Erfahrung bei Webentwicklung und Webdesign.`, 

    secondH3: "Webentwicklung",  

    webDevProjects: [ 
        { name: "Pending", 
          description: "Pending is a task and project manager that allows you to set importance to each items, as well as a final due date.", 
          tech: "Node package manager, Git, vanilla Javascript, Webpack compiler, HTML and CSS (no frameworks).", 
          repo: "https://github.com/Diesel01/todo_list", 
          live: "https://github.com/Diesel01/todo_list/dist/index.html",
          img: "../imgs/pending.png"
        }
    ]
}

export {en, de}