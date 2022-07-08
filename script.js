const squareContainer = document.querySelector('#squareContainer');
const colorButtons = document.querySelectorAll('.colors');

let initialNumberOfSquares = 16;
let trailColor = 'black';
const r = 255;


// Create initial squares of 16x16
createSquares(initialNumberOfSquares);


// Change trailColor value
colorButtons.forEach(item => {
    item.addEventListener('click', (e) => {
        trailColor = e.target.id;
        if (trailColor === 'clear') {
            squares.forEach(item => {
                item.style.backgroundColor = 'white';
            })
        }
    })
})

// Create Squares
function createSquares(numberOfSquares) {
    for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'squares';
        newDiv.style.width = `${100/numberOfSquares}%`;
        squareContainer.appendChild(newDiv);
    }
    
    leaveTrail();
    
}

// Leave trail by changing the backgroundcolor of squares
function leaveTrail(){
    squares = document.querySelectorAll('.squares');
    
    squares.forEach(item => {
        item.addEventListener('mouseover', changeColor);
    })
}

// Change color according to the value of the trailcolor
function changeColor(e){
    if (trailColor === 'black' || trailColor === 'white') {
        e.target.style.backgroundColor = trailColor;
    } else if (trailColor === 'rainbow') {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    } else {
        const currentColor = e.target.style.backgroundColor;
        const rgbArr = currentColor.substring(4, currentColor.length-1)
                .replace(/ /g, '')
                .split(',');

        if (currentColor !== 'black' && rgbArr[0] === rgbArr [1] && rgbArr[0] === rgbArr[2] && rgbArr[1] === rgbArr[2]){
            e.target.style.backgroundColor = `rgb(${rgbArr[0]-r/10}, ${rgbArr[0]-r/10}, ${rgbArr[0]-r/10})`
        } else {
            e.target.style.backgroundColor = `rgb(${r-r/10},${r-r/10},${r-r/10})`;
        }
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
}

