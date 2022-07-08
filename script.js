var squareContainer = document.querySelector('#squareContainer');

var initialNumberOfSquares = 16;

// Create initial squares of 16x16

createSquares(initialNumberOfSquares);

function createSquares(numberOfSquares) {
    for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'squares';
        newDiv.style.width = `${100/numberOfSquares}%`;
        squareContainer.appendChild(newDiv);
    }
    leaveTrail();
    
}

// Leave a trail by changing the backgroundcolor of squares

function leaveTrail(){
    var squares = document.querySelectorAll('.squares');

    squares.forEach(item => {
        item.addEventListener('mouseover', changeColor);
    })

    function changeColor(e){
        e.target.style.backgroundColor = 'black';
    }
}



// Add popup asking for number of squares

var popupButton = document.getElementById('popupButton');

popupButton.addEventListener('click', askNumberOfSquares);

function askNumberOfSquares(e) {
    var newNumberOfSquares = prompt("Please enter a number between 1 and 100");
    if (newNumberOfSquares === null){
        return;
    } else {
        while (!(newNumberOfSquares >= 1 && newNumberOfSquares <= 100)) {
        newNumberOfSquares = prompt("This is not a number between 1 and 100. Please enter a number between 1 and 100.");
        }
        while (squareContainer.firstChild) {
        squareContainer.firstChild.remove();
        }
        createSquares(newNumberOfSquares);
    }
}

