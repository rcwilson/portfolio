const Project = require('./project.class');

const ProjectsData = [
        new Project({
            name: "Choose-Your-Own-Adventure Game",
            category: "Personal",
            gitURL: "https://github.com/rcwilson/friend-adventure",
            demoURL: "https://rcwilson.github.io/friend-adventure",
            summary: "Interactive Storytelling App",
            description: [
                "Made with React, this single page app uses LocalStorage to keep track of the user's decisions during the story. These decisions impact the story, ranging from small dialogue changes to branching story arcs.",
                "This was my first React playground app which developed my interest in the framework."
            ],
            tools: 
                "React,HTML5,CSS3,GitHub,React Hooks,SPA,JSON,LocalStorage,Responsive Design",
            images: [
                "friendventure/friendventure-1.JPG",
                "friendventure/friendventure-2.JPG",
                "friendventure/friendventure-3.JPG"
            ]
        }),
        new Project({
            name: "Bring It",
            category: "School",
            gitURL: "https://github.com/rcwilson/Bring-It-Front-End",
            summary: "The ultimate party planner! ",
            description: [
                "Users can log in and create or check an event, then claim items needed or create their own. Bring it is about to be a potluck savior.",
                "The data is stored in a cloud database called MongoDB. Bring It works through a custom-built API that handles the logic and management of that data.",
            ],
            tools: 
                "NodeJS,Express,WebPack,MongoDB,Mongoose,HTML5,CSS3,GitHub,SPA,JSON,LocalStorage,Postman,Jest",
            images: [
                "bring-it/bring-it-1.JPG",
                "bring-it/bring-it-2.JPG"
            ]
        }),
        new Project({
            name: "Black Jack",
            category: "School",
            gitURL:  "https://github.com/rcwilson/blackjack-rcw",
            demoURL: "https://rcwilson.github.io/blackjack-rcw/",
            summary: "A Blackjack game with style!",
            description: [
                "My first take on an actual front-end application using vanilla JavaScript. This project gave me incredible clarity on what Webpack does, various ways to use CSS, and the power of JavaScript DOM manipulation.",
            ],
            tools: 
                "NodeJs,JavaScript,Express,WebPack,HTML5,CSS3,GitHub",
            images: [
                "blackjack/blackjack-1.JPG",
                "blackjack/blackjack-2.JPG"
            ]
        }),
    ]

export default ProjectsData;