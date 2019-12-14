/*ejercicio1*/
/*
var person = [
['Jorge', 'Perez',23],
['Juan','Torres',25],
['Daniel','Guzman',30]
]

const matrizPerson = person.array.map(person => new Person(person[0], person[1],person[2]))


function Person(first,last,age){
    this.firstName=first
    this.lastName=last
    this.age=age
}

*/

/*reto1*/

let arraysM = []
const arrayOfMultiples = (number, length) => {
    for (count = 0; count < length; count++) {
        arraysM.push([number * count])

    }
    return arraysM
}

/*reto2*/

var objeto = ({
    keyOne: 12,
    keyTwo: 45
})

const objetoMatriz = objeto => {


    var valores = []
    var arrayVacio = []
    for (var prop in objeto) {

        valores.push(prop)
    }
    for (var count = 0; count < valores.length; count++) {
        arrayVacio.push([valores[count], objeto[valores[count]]])


    }
    return objeto
}




