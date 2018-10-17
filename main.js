var cells = document.querySelectorAll('td')
var display = document.getElementById('display')
var tableData = ["","","","","","","","",""]
var turn = 'x'
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

cells.forEach(function(e) {
    e.addEventListener('click', handleClick)
})

function handleClick(e) {
  if  (tableData[e.target.id] === '') {
      tableData[e.target.id] = turn
      render();
      checkWin();
      switchTurn();

  }
    }

function render() {
    tableData.forEach(function (element, i) {
        cells[i].innerText = element

    })
}
  
function switchTurn(){
    if (turn === 'x') {
        turn = 'o'
    } else {
        turn = 'x'
    }
}

function checkWin() {
    for (i = 0; i < winningCombos.length; i++) {
        var str = ''
        for (j = 0; j < winningCombos[i].length; j++) {
            str = str + tableData[winningCombos[i][j]]
        }
        if (str.length === 3) {
            if (str === 'xxx') {
                display.innerText = 'X Wins!'
            } else if (str === 'ooo') {
                display.innerText = 'O Wins!'
            }
        }
    }
}