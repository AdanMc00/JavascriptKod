var numbers = [[1,3,4,5] , [3,45,1], [2,4,5],[2,6,8]]
numbers.map(function(arr){
    let total = 0
    arr.forEach(function(number){
        total += number
        console.log(total)
    })
return total

})



