const gridContainer = document.querySelector('#grid-container');
const newGrid = document.querySelector('#new-grid');

function generateGrid(numPixels) {
    if (numPixels > 100) {
        generateGrid(prompt('Please select a number less than 100'));
    } else {
        for(i = 0; i < numPixels; i++) {
            for(j = 0; j < numPixels; j++) {
                const pixel = document.createElement('div');
                gridContainer.appendChild(pixel);
                pixel.setAttribute('col', `${j}`);
                pixel.setAttribute('row', `${i}`)
                pixel.classList.add('pixel');
                pixel.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = 'black';
                })
                pixel.style.width = `${(100/numPixels)}%`;
            }
        }
    }
}

newGrid.addEventListener('click', (event) => {
    generateGrid(prompt('How many pixels?'));
})