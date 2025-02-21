let body = document.querySelector('body')
body.style.backgroundColor='#212121'
body.style.color='white'
let div = document.createElement('div')
div.className= 'main'
div.id='4'
let p = document.createElement('p')
let text = document.createTextNode('I am text inside p')
p.appendChild(text)
div.appendChild(p)
body.appendChild(div)
p.style.fontSize='50px'

// easy but unoptimized edit
// p.innerHTML='I am replaced'
// Edit
let newp = document.createElement('p')
newp.appendChild(document.createTextNode('I am replaced'))
div.replaceWith(newp)
newp.style.fontSize='50px'