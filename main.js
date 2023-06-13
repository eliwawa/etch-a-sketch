const gridContainer = document.querySelector('#grid-container');

function generateGrid(numPixels) {
    for(i = 0; i < numPixels; i++) {
        for(j = 0; j < numPixels; j++) {
            const pixel = document.createElement('div');
            gridContainer.appendChild(pixel);
            pixel.setAttribute('col', `${j}`);
            pixel.setAttribute('row', `${i}`)
            pixel.classList.add('pixel');
            pixel.style.width = `${(100/numPixels)}%`;
            pixel.textContent = `${j}, ${i}`;
        }
    }
}

generateGrid(16);