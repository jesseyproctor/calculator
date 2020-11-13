const numButtons = document.querySelectorAll('.button')
const clearButton = document.querySelector('#clear')
const outputButton = document.querySelector('#output')
const multiplyButton = document.querySelector('#multiply')
const subtractButton = document.querySelector('#subtract')
const decimalButton = document.querySelector('#decimal')
const equalsButton = document.querySelector('#equals')
const addButton = document.querySelector('#add')

numButtons.forEach(item => {
    item.addEventListener('click', event => { 
        outputButton.innerHTML += item.innerHTML
    })
})

//math.evaluate() for equals

// document.getElementById('add').addEventListener('click', function (event) {
//     console.log('it worked')
// })

// document.querySelectorAll('.button').forEach(item => {
//     item.addEventListener('click', event => {
//         console.log(`I get ${item.innerHTML} by with`) 
//         console.log('alittle help ' + item.innerHTML + ' from my friends') 
//         outputButton.innerHTML += item.innerHTML
//     })
// })


//   document.querySelector('#clear').addEventListener('click', function () {
//     document.querySelector('#output').innerHTML = ''
//   })
