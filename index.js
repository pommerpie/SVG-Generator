const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [ // Questions
    {
        type: 'input',
        message: 'Enter up to 3 characters.',
        name: 'text',
        validate: input => (input.length > 3) ? 'Please enter up to 3 characters.' : true
    },
    {
        type: 'input',
        message: 'Enter a text color.',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape.',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a shape color.',
        name: 'shapeColor'
    }
]

function makeSvg(text, textColor, shape, shapeColor){ // Grabs string for SVG
    switch (shape) {
        case 'Triangle':
            const newTriangle = new Triangle(text, textColor, shapeColor) // Makes new Triangle object
            return newTriangle.render() // Returns the SVG string
            break;
        case 'Circle':
            const newCircle = new Circle(text, textColor, shapeColor) // Makes new Circle object
            return newCircle.render() // Returns the SVG string
            break;
        case 'Square':
            const newSquare = new Square(text, textColor, shapeColor) // Makes new Square object
            return newSquare.render() // Returns the SVG string
            break;
    }
}

function start() {
    inquirer.prompt(questions) // Renders questions
        .then((answers) => {
            const { text, textColor, shape, shapeColor } = answers // Separates answers
            const svg = makeSvg(text, textColor, shape, shapeColor) // Renders SVG 
            fs.writeFile('./examples/logo.svg', svg, (err) => { // Writes SVG file
                if(err){
                    console.log(err)
                }
                console.log('File created')
            })
        })
}


start() // Start function