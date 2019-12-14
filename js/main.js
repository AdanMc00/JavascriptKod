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

var arrayOfMultiples = [2,3,4,5]
for(count = 0; count<arrayOfMultiples.length; count++){
    console.log(arrayOfMultiples[count]*arrayOfMultiples[0])
}

/*reto2*/

var object = ({
    keyOne: 12,
    keyTwo: 45
    })
    console.log(Array.from(object).map)