// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Svg = require('./lib/svg');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


// Array of questions for user input
const questions = [
    // Three Characters
    {
        type: "input",
        name: "text",
        message: "Enter a maximum of three words:",
    },
    // Text Color
    {
        type: "input",
        name: "textColor",
        message: "Enter text color:",
    },
    // Shape
    {
        type: "list",
        name: "shape",
        message: "Please choose your shape:",
        choices: [
            "circle",
            "triangle",
            "square",
        ],
    },
    // Shape Color
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color:",
    },
];

//Write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("There was an error:", err);
        } else {
            console.log(".svg logo successfully created!");
        }
    });
}

/**
 * Initializes the SVG maker application.
 * Prompts the user with questions, creates an SVG object, sets the text and shape elements,
 * and writes the SVG content to a file.
 */
function init() {
    inquirer.prompt(questions).then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;

        const svg = new Svg();
        svg.setTextEl(text, textColor);

        let shapeObj;
        switch (shape) {
            case "circle":
                shapeObj = new Circle();
                break;
            case "triangle":
                shapeObj = new Triangle();
                break;
            case "square":
                shapeObj = new Square();
                break;
            default:
                throw new Error("Invalid shape selected");
        }
        shapeObj.setColor(shapeColor);
        svg.setShapeEl(shapeObj);

        writeToFile('logo.svg', svg.render());
    });
}

// Function call to initialize app
init();