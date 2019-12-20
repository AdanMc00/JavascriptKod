/*

var person = JSON.stringify({
  "age": 30,
  "firstName": "Adan",
  "lastName": "Mijangos",
  "pitch": false
})

var response
var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {

    response = this.response
  }
}

xhttp.open("POST","https://ajaxkode.firebaseio.com/koders.json")
xhttp.send(person)
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    
    responseHandler(this.response) 
  }
}



xhttp.open("GET","https://ajaxkode.firebaseio.com/.json")
xhttp.send()

const responseHandler= response => {
  var responseObj = JSON.parse(response)
  var kodersMatrix = Object.entries(responseObj)
  
  console.log(kodersMatrix)
}

