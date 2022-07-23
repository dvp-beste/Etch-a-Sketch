const squareContainer = document.querySelector('#squareContainer');
const colorButtons = document.querySelectorAll('.colors');
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', onClearClick);
    
function onClearClick(){
    const squares = document.querySelectorAll('.squares');
    squares.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}

let initialNumberOfSquares = 16;
let trailColor;

// Change trailColor value

colorButtons.forEach(item => {
    item.addEventListener('click', (e) => {
        trailColor = e.target.id;
        e.target.classList.add('highlight');
        colorButtons.forEach(i => {
            if (e.target.id !== i.id) {
                i.classList.remove('highlight');
            }
        })
    })
})


// Create initial squares of 16x16
createSquares(initialNumberOfSquares);

// Create Squares with an EventListener to leave a trail with the selected trailColor

function createSquares(numberOfSquares) {
    for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
        const square = document.createElement('div');
        square.className = 'squares';
        square.style.width = `${100/numberOfSquares}%`;
        square.addEventListener('mouseover', changeColor);
        squareContainer.appendChild(square);
    }
}


// Change color according to the value of the trailcolor

const maxRgbValue = 255;
function changeColor(e) {
    if (trailColor === 'black' || trailColor === 'white') {
        e.target.style.backgroundColor = trailColor;
    } else if (trailColor === 'rainbow') {
        e.target.style.backgroundColor = paintRainbow();
    } else if (trailColor === 'greyScale') {
        e.target.style.backgroundColor = paintGreyScale(e);
    } 
}

function paintRainbow() {
    return `rgb(${Math.floor(Math.random()*maxRgbValue)},${Math.floor(Math.random()*maxRgbValue)},${Math.floor(Math.random()*maxRgbValue)})`;
}

function paintGreyScale(e) {
    const currentColor = e.target.style.backgroundColor;
    const rgbValuesArray = currentColor.substring(4, currentColor.length-1)
            .replace(/ /g, '')
            .split(',');
    if (rgbValuesArray [0] === rgbValuesArray  [1] && rgbValuesArray [0] === rgbValuesArray [2] && rgbValuesArray [1] === rgbValuesArray [2]){
        return `rgb(${rgbValuesArray [0]-maxRgbValue/10}, ${rgbValuesArray [0]-maxRgbValue/10}, ${rgbValuesArray [0]-maxRgbValue/10})`
    } else {
        return `rgb(${maxRgbValue*0.9},${maxRgbValue*0.9},${maxRgbValue*0.9})`;
    }
}

// Add popup asking for number of squares

const popupButton = document.getElementById('popupButton');

popupButton.addEventListener('click', askNumberOfSquares);

function askNumberOfSquares(e) {
    let newNumberOfSquares = prompt("Please enter a number between 1 and 100");
    if (newNumberOfSquares === null){
        return;
    } 
    while (!(newNumberOfSquares >= 1 && newNumberOfSquares <= 100)) {
    newNumberOfSquares = prompt("This is not a number between 1 and 100. Please enter a number between 1 and 100.");
    }
    while (squareContainer.firstChild) {
    squareContainer.firstChild.remove();
    }
    createSquares(newNumberOfSquares);
    squares = document.querySelectorAll('.squares');
    
}
