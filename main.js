const numButtons = document.querySelectorAll('.button')
const clearButton = document.querySelector('#clear')
const outputBox = document.querySelector('#output')
const multiplyButton = document.querySelector('#multiply')
const subtractButton = document.querySelector('#subtract')
const decimalButton = document.querySelector('#decimal')
const equalsButton = document.querySelector('#equals')
const addButton = document.querySelector('#add')
const divideButton = document.querySelector('#divide')

numButtons.forEach(item => {
    item.addEventListener('click', event => { 
        outputBox.innerHTML += item.innerHTML
    })
})

clearButton.addEventListener('click', function () {
    document.querySelector('#output').innerHTML = ''
})

equalsButton.addEventListener('click', function () {
    console.log(eval(outputBox.innerHTML))
    outputBox.innerHTML = eval(outputBox.innerHTML)

})

addButton.addEventListener('click', function () {
    console.log('add')
    outputBox.innerHTML += addButton.innerHTML 
})

subtractButton.addEventListener('click', function () {
    console.log('subtract')
    outputBox.innerHTML += subtractButton.innerHTML 
})

multiplyButton.addEventListener('click', function () {
    console.log('multiply')
    outputBox.innerHTML += multiplyButton.innerHTML 
})

divideButton.addEventListener('click', function () {
    console.log('divide')
    outputBox.innerHTML += divideButton.innerHTML 
})

