var menu = ["perro1", "perro2", "perro3"]

const buildMenu = (arr, parentSelector) => {
  let parent = document.getElementsByTagName(parentSelector)[0]
  let children = menu.reduce((acc, cuValue )=>'${acc}<li class ="test">${cuValue}</li>','')
  parent.innerHTML = children
}

buildMenu(menu,'ul')

var liNodes = document.getElementsByTagName('li')


for(let index = 0;index<liNodes.length; index++){
liNodes[index].addEventListener("click", ()=>{
  console.log('aqui ${index}')
})
}