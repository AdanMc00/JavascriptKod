/*Ejercicio 1*/
var alumno = [
  {
    nombre: "pedro",
    apellido: "perez",
    edad: 20,
    calificacion: 9,
  }, {
    nombre: "luis",
    apellido: "sanchez",
    edad: 25,
    calificacion:7,
  }
]



  alumno.reduce((acc, valor) => acc + valor.calificacion / alumno.length),0
  console.log(alumno)




/*Ejercicio3*/

var alumno = [

  {

    nombre: "pedro",

    apellido: "perez",

    edad: 20,

    calificacionesMat: [9, 6, 7, 8]

  }, {

    nombre: "luis",

    apellido: "sanchez",

    edad: 25,

    calificacionesMat: [7, 5, 9, 5]

  }

]

​

for (propiedad in alumno) {

  var sumaCalif = (alumno[propiedad].calificacionesMat)

  const promMat = sumaCalif.reduce((acc, valor) => acc + valor / sumaCalif.length, 0)

​

  console.log(promMat)

​

}





