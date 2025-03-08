// Load the canvas after grid size selection
function loadCanvasHome() {
  document.getElementsByTagName('body')[0].innerHTML = ``;
  document.getElementsByTagName('body')[0].innerHTML = `
  <h1 id="canvas-title">Welcome to Etch-A-Sketch!</h1>
    <div class="nav">
      <button id="reset">Reset canvas</button>
      <button id="erase">Erase drawing</button>
      <button id="random-col">Rainbow mode</button>
    </div>
    <div id="grid" class="grid"></div>
    `;
}
// Load the initial screen on page load
function loadInitialScreen() {
  document.getElementsByTagName('body')[0].innerHTML = ``;
  document.getElementsByTagName('body')[0].innerHTML = `  
  <h1>Select grid size:</h1>
  <input type="button" id="8" value="8 x 8" />
  <input type="button" id="16" value="16 x 16" />
  <input type="button" id="32" value="32 x 32" />
  <input type="button" id="50" value="50 x 50" />
`;
  document.addEventListener('click', (e) => {
    let userSelection = Number(e.target.id);
    loadCanvasHome();
    constructGridLayout(userSelection);
  });
}
// Create the grid per user selection
function constructGridLayout(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement('div');
    document.getElementById('grid').appendChild(div);
  }
  document.getElementById(
    'grid'
  ).style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  document.getElementById(
    'grid'
  ).style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

// Trigger initial screen on page load
loadInitialScreen();
