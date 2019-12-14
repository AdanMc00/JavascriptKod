/*Ejercici01*/
var array = ['a','b','c','d','e']
var list = document.getElementsByClassName("lista")
array.forEach((key,index)=> {
    list[index].innerText = key
    })


