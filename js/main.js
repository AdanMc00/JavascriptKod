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





