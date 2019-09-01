const gridContainer = document.createElement('div');
const grids = document.createElement("div");
grids.setAttribute("id", "grid");
gridContainer.classList.add('center');
gridContainer.appendChild(grids);
document.body.appendChild(gridContainer);

function generateGrids(){
    for(let i = 0; i < 16; i++){
        for(let y = 0; y < 16; y++){
            let grid = document.createElement('div');
            grid.addEventListener('mouseover', pixalate);
            grid.classList.add('grid');
            grids.appendChild(grid);
        }
    }
}

generateGrids();

function pixalate(){
    console.log("BLACK");
    this.style.backgroundColor = "black";

}