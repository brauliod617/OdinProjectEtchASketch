const gridContainer = document.createElement('div');
const grids = document.createElement("div");
const clearBtn = document.getElementById('clearBtn');

grids.setAttribute("id", "grid");
gridContainer.classList.add('center');
gridContainer.appendChild(grids);
document.body.appendChild(gridContainer);

function generateGrids(x){
    for(let i = 0; i < x; i++){
        for(let y = 0; y < x; y++){
            let grid = document.createElement('div');
            grid.addEventListener('mouseover', pixalate);
            grid.classList.add('grid');
            grids.appendChild(grid);
        }
    }
}

generateGrids(16);

function pixalate(){
    this.style.backgroundColor = "black";
}

clearBtn.addEventListener('click', clearScreen);

function clearScreen(){
    let children = grids.childNodes;

     let input = prompt("How many squares per side would you like on new grid?");
     let regex = /^[0-9]+$/;
     while(!input.match(regex)){
        input = prompt("please enter a numerical value");
     }
     eraseGrids();

     grids.style.gridTemplateRows = "repeat(" +
         input + ", " + 480/input + "px [row-start]";
     grids.style.gridTemplateColumns = "repeat(" +
         input + ", " + 480/input + "px [col-start]";

     generateGrids(input);

    for(let i = 0; i < grids.childElementCount; i++ ){
        children[i].style.backgroundColor = "white";
        children[i].style.width = (480/input).toString() + "px";
        children[i].style.height = (480/input).toString() + "px";
    }

}

function eraseGrids(){
    let count = grids.childElementCount;
    for(let i = 0; i < count; i++){
        grids.removeChild(grids.children[0]);
    }
}