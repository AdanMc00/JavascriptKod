/* var numbers = [[1,3,4,5] , [3,45,1], [2,4,5],[2,6,8]]
numbers.map(function(arr){
    let total = 0
    arr.forEach(function(number){
        total += number
        
    })
return total

})

/*ejercicio2*/

/*
var array = ['perro' ,'gato' , 'puerco', 'Araña' , 'asno' , 'anchoa']

array.filter(function(element) {
     return element[0] === 'a' || element[0] === "A"
     

})


/*Ejercicio3*/
/*
var numbers = [1,-2,3,4,5,7,8,-67,98,3,234,-78]
   numbers.forEach(function(number){
        if (number >= 0  && number % 2 === 0){
            console.log(number)

        }

    })
   

/* ejercicio 4
var matrix = [[1,2,3,0],[10,0,3,4],[1,2,0],[4,3,2,1]]

const reduceMatrix = matrix => {

        return matrix.reduce((acc,valueCurrent)=>{
        return acc + valueCurrent.reduce((acc, valueCurrent)=>{
            return acc + valueCurrent
        })
    })
}

console.log(reduceMatrix(numbers))
*/

/*Tarea*/
/*
var num = 10
var countNum = 0
var arrNum = []
for (count = 1; count<num;count++){
   arrNum = count+ countNum
   arrNum.map(function(arr){
       arr * arr[+1]
   })
   console.log(arrNum)
}


/*tarea2*/
var countLetter = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,rs,t,u,v,w,x,y,z]
var key = "perrosaurio"
var letter = key.split("")
key.forEach (element => {
    element + 50
});
console.log(letter)


