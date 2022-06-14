let text = document.getElementById('input')
let output = document.getElementById('output')
output.innerText = localStorage.getItem('myshake')

text.addEventListener('keyup', func)
function func(){
    output.innerText = text.value
    localStorage.setItem('myshake', text.value)
}

let btn = document.getElementById('btn')
let paragraph = document.querySelector('.vis')
btn.addEventListener('click', ()=>{
console.log(paragraph)
paragraph.style.color = 'blue'
})