var container = document.querySelector('.container');

var pixelSize = 100;

// Create squares 

for (let i = 0; i < Math.pow(pixelSize, 2); i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'squares';
    newDiv.style.width = `${100/pixelSize}%`;

    container.appendChild(newDiv);
}

// Leave a trail by changing the backgroundcolor of squares

var squares = document.querySelectorAll('.squares');


squares.forEach(item => {
    item.addEventListener('mouseover', changeColor);
})

function changeColor(e){
    e.target.style.backgroundColor = 'black';
}