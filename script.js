var container = document.querySelector('.container');

var pixelSize = 16;
// Create squares 

for (let i = 0; i < Math.pow(pixelSize, 2); i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'squares';
    newDiv.style.width = `${100/pixelSize}%`;

    container.appendChild(newDiv);
}
