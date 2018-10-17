var cells = document.querySelectorAll('td')
var tableData = ["","","","","","","","",""]
var turn = 'x'

cells.forEach(function(e) {
    e.addEventListener('click', handleClick)
})

function handleClick(e) {
  if  (tableData[e.target.id] === '') {
      tableData[e.target.id] = turn
      render();
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