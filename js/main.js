
var numbers = [1,2,3,4,5]
var position = 0

while (position<numbers.length) {
console.log(numbers[position])
position++
}

var positionR = numbers.length

while (positionR >= 0 ) {
    console.log(numbers[positionR])
        positionR--
    }

    /** ejercicio2 */

    var numbers = [1,2,3,4,5,[6,7,8,9,10]]

    var positionL = 0
    
    while(positionL< numbers.length) {
        console.log(numbers[positionL][positionL])
        positionL++
    }

/*ejercicio3*/
    var word = "palabra"
    var countwo = 0

for (var count= 0; count<word.length; count ++ ) {
    if (word.charAt(count) === "a") {
        countwo++
        console.log(`${word} tiene ${countwo} vocales`)
    }


}



/* ejercicio 4 */

    
var numberOne =  10
var numberTwo= 50
var numbersCount = 0
if(numberOne > 0 && numberTwo > 0 && numberOne < numberTwo){
    console.log("Ambos son positivos")
    
    for (var count = 0; count<numberTwo; count++){
        numberOne++
        console.log(numberOne)
            if(numberOne % 8 === 0 ){
            numbersCount++
            console.log(`Hay ${numbersCount} multiplos de 8`)
        }
            
        }
}


