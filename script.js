var container = document.querySelector('.container');

var pixelSize = 16;
// Create rows
for (let j = 0; j < pixelSize; j++) {
    var newRow = document.createElement('div');
    newRow.className = 'rows';
    newRow.style.height = `${100/pixelSize}%`;

    container.appendChild(newRow);

        // Create squares within the new row

        for (let i = 0; i < pixelSize; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'squares';
        newDiv.style.width = `${100/pixelSize}%`;

        newRow.appendChild(newDiv);
    }
}
