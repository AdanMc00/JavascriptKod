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


