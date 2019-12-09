/*
function capitalize (string){
    
    string.toLowerCase()
    var separateWords = string.split(' ')
    var arrayCapitalize = []
    for (count = 0; count< separateWords.length; count++) {
        var wordToWord = separateWords[count]
        var wordCapitalize =`${wordToWord[0].toUpperCase()} ${wordCapitalize.slice(1)}`
        arrayCapitalize[count]= wordCapitalize
    }

    var arrayToString = arrayCapitalize.join (' ')
    return arrayToString
}
*/

/*Ejercicio2*/

function longestWord(phrase){


    var word = phrase.split (" ")
    var wordSplit = word[0]
        for (count = 0 ; count<word.length - 1; count++){
        var comparedWord = word[count+1]
        if (comparedWord.length>wordSplit.length)
        {wordSplit = comparedWord}
   
   return wordSplit
   }
}

/* Ejercicio 3 */

function numberone (matrix){
var arrayJoin = matrix.join()
var countNum = 0

for(count = 0;count <arrayJoin.length; count++ ){
    if (arrayJoin[count] === 1){
        countNum++
    }
    return countNum
}
}

