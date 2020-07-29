//grid information
const table = document.querySelector('#pixelCanvas');
const size= document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const color = document.querySelector("#colorPicker");

// calls makeGrid(), when the sizePicker(size) is submitted
size.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid(height.value, width.value)
});

//Takes users input of height and width and creates grid
function makeGrid(height, width) {
    table.innerHTML = " ";
    for (let i=0; i < height; i++){
        const row = table.insertRow(i);
        for (let n=0; n < width; n++) {
            const cell = row.insertCell(n);
            cell.addEventListener('click', function(evt) {
                cell.style.backgroundColor = color.value;
            });
        }

    }

};


