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
  <input type="button" class="grid-size" id="8" value="8 x 8" />
  <input type="button" class="grid-size" id="16" value="16 x 16" />
  <input type="button" class="grid-size" id="32" value="32 x 32" />
  <input type="button" class="grid-size" id="50" value="50 x 50" />
`;
  document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'grid-size') {
      let userSelection = Number(e.target.id);
      loadCanvasHome();
      constructGridLayout(userSelection);
      handleGameButtons();
      drawWithBlack();
    }
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
// Handle in-game buttons
function handleGameButtons() {
  document.addEventListener('click', (e) => {
    // Reset button
    if (e.target.id === 'reset') {
      loadInitialScreen();
    }
    // Erase button
    if (e.target.id === 'erase') {
    }
    // Rainbow mode button
    if (e.target.id === 'random-col') {
    }
  });
}
// Handle black and white coloring
function drawWithBlack() {
  document.addEventListener('mousedown', (e) => {
    document.addEventListener('mousemove', (e) => {
      console.log(e.target);
    });
    document.addEventListener('mouseup', (e) => {
      document.removeEventListener();
    });
  });
}

// Trigger initial screen on page load
loadInitialScreen();
