let parent = document.querySelector('.parent')

let childs = parent.children
childs[0].style.color='red'

for (let i = 0; i < childs.length; i++) {
    // console.log(childs[i].innerHTML)
}
console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);