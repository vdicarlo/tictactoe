var cells = document.querySelectorAll('td')
var tableData = ["","","","","","","","",""]

cells.forEach(function(e) {
    e.addEventListener('click', handleClick)
})

function handleClick(e) {
   tableData[e.target.id] = 'x' 
   render()
    }

function render() {
    tableData.forEach(function (element, i) {
        cells[i].innerText = element

    })
}
  