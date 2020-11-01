// base de datos por defecto
let defaultDatabase = firebase.database();
// ruta a la base de datos
let noticiasRef = defaultDatabase.ref("noticias");

let boton = document.querySelector("#pulsar").addEventListener("click",enviardatos);

function enviardatos() {


  //console.log(titulo);
  //console.log(descripcion);

    // A post entry.
    let titulo = document.querySelector("#titulolabel").value;
    let descripcion = document.querySelector("#titulotexto").value;

    let nuevaNoticia = {
      "titulo"      : `${ titulo }`,
      "descripcion" : `${ descripcion }`,
    };
  
    firebase.database().ref("noticias").push(nuevaNoticia);


}
enviardatos();

