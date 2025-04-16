// Global vars
let rainbowMode = false;
let eraseMode = false;

// Load the initial screen on page load
function selectGridSize() {
  // Reset the HTML
  document.getElementsByTagName('body')[0].innerHTML = ``;
  document.getElementsByTagName('body')[0].innerHTML = `
    <h1 id="grid-title" >Select grid size:</h1>
    <input type="button" class="grid-size" id="8" value="8 x 8" />
    <input type="button" class="grid-size" id="16" value="16 x 16" />
    <input type="button" class="grid-size" id="32" value="32 x 32" />
    <input type="button" class="grid-size" id="50" value="50 x 50" />
  `;
  document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'grid-size') {
      let userSelection = Number(e.target.id);
      loadGrid();
      constructGrid(userSelection);
    }
  });
}
// Create the grid per user selection
function constructGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement('div');
    div.classList = 'grid-box';
    document.getElementById('grid').appendChild(div);
  }
  document.getElementById(
    'grid'
  ).style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  document.getElementById(
    'grid'
  ).style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
// Handle in-game buttons input
function gridButtons() {
  document.addEventListener('click', (e) => {
    // Reset button
    if (e.target.id === 'reset') {
      location.reload();
      selectGridSize();
    }
    // Erase button
    if (e.target.id === 'erase') {
    }
    // Rainbow mode button
    if (e.target.id === 'random-col') {
    }
  });
}
// Load the canvas after grid size selection
function loadGrid() {
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
  gridButtons();
  drawOnGrid();
  rainbowButton();
  isErase();
}
// Allow draw on grid
function drawOnGrid() {
  document.addEventListener('mousedown', function (e) {
    function handleMouseMove(e) {
      if (e.target.classList[0] === 'grid-box') {
        if ((rainbowMode === true) & (eraseMode === false)) {
          let colors = [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'magenta',
            'cyan',
          ];
          e.target.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        }
        if (eraseMode === true) {
          e.target.style.backgroundColor = '';
        }
        if ((rainbowMode === false) & (eraseMode === false)) {
          e.target.style.backgroundColor = 'black';
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  });
}
// Allow rainbow mode
function rainbowButton() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'random-col') {
      if (rainbowMode === false) {
        rainbowMode = true;
        document.getElementById('random-col').style.backgroundColor = 'red';
      } else {
        rainbowMode = false;
        document.getElementById('random-col').style.backgroundColor = '';
      }
    }

    if (e.target.id === 'erase') {
    }
  });
}
// Allow erase mode
function isErase() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'erase') {
      if (eraseMode === false) {
        eraseMode = true;
        rainbowMode = false;
        document.getElementById('erase').style.backgroundColor = 'red';
        document.getElementById('random-col').style.backgroundColor = '';
      } else {
        eraseMode = false;
        document.getElementById('erase').style.backgroundColor = '';
      }
    }
  });
}
// Load grid size screen on page load
selectGridSize();
