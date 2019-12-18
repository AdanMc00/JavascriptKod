/*var objectOne = [{
  'nodename': 'p',
  'content': 'hola'
}, {
  'nodename': 'p',
  'content': 'mundo'
}, {
  'nodename': 'h1',
  'content': 'perros'
}
]
const buildStruct = (nodes, parent) => {

  const conatiner = document.getElementById(parent)
  nodes.forEach(
    ({ nodename, content }) => {
    const nodesTwo = document.createElement(nodename)
    nodesTwo.innerText = content
    container.appendChild(nodesTwo)
    

  })
};
*/

/*Ejercicio2*/

const arrayCards = [
  {
    'title': 'Koders aprenden',
    'subtitle': 'a golpes',
    'content': 'ndkjndkjn',
    'img': 'tu imagen aqui'
  }
]
const buildCards = (titulo, subtitulo, descripcion) => {


  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">$(title)></h5>
        <h6 class="card-subtitle mb-2 text-muted">$(subtitle)</h6>
        <p class="card-text">$(description)</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
}


