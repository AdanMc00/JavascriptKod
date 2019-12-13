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
    calificacion: 7,
  }, {
    nombre: "luis",
    apellido: "sanchez",
    edad: 25,
    calificacion: 6,
  }, {
    nombre: "luis",
    apellido: "sanchez",
    edad: 25,
    calificacion: 9,
  }

]



const prom = alumno.reduce((acc, valor) => acc + valor.calificacion, 0) / alumno.length
console.log(prom)

/*Ejercicio2*/

var persona = [{
  nombre: "Pepe",
  apellidoPaterno: "pecas",
  apellidoMaterno: "pica",
  fechaNacimiento: [
    {
      dia: "26"
    },
    {
      mes: "07"
    }, {
      año: "1989"
    }]
}, {
  nombre: "juan",
  apellidoPaterno: "lopez",
  apellidoMaterno: "garcia",
  fechaNacimiento: [
    {
      dia: "13"
    },
    {
      mes: "03"
    }, {
      año: "1979"
    }]
}, {
  nombre: "sergio",
  apellidoPaterno: "sandoval",
  apellidoMaterno: "perez",
  fechaNacimiento: [
    {
      dia: "06"
    },
    {
      mes: "11"
    }, {
      año: "1999"
    }]
}]
for (const propiedad in persona) {
      var fechaComp = persona[propiedad].fechaNacimiento
      var nombreRFC = persona[propiedad].nombre.slice()
      var apellidoPaRFC = persona[propiedad].apellidoPaterno
      var apellidoMaRFC = persona[propiedad].apellidoMaterno.slice()
      
  }
  console.log(fechaComp)
  console.log(nombreRFC)
  console.log(apellidoMaRFC)




/*Ejercicio3 */

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



for (propiedad in alumno) {

  var sumaCalif = (alumno[propiedad].calificacionesMat)

  const promMat = sumaCalif.reduce((acc, valor) => acc + valor / sumaCalif.length, 0)



  console.log(promMat)



}





