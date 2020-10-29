// constante 

/*
const noticias = [
{
    titulo :        "la mega fiesta",
    descripcion:    "de 150 personas mas popular del verano"
},

{
    titulo :        "el español",
    descripcion:    "asesino a un soldado aleman"
},

{
    titulo :        "la fabrika",
    descripcion:    "textil donde trabajan muchas personas"
},

{
    titulo :        "la fabrika",
    descripcion:    "textil donde trabajan muchas personas"
},
{
    titulo :        "la fabrika",
    descripcion:    "textil donde trabajan muchas personas"
}
];

*/
function initDatabase() {
var firebaseConfig = {
    apiKey: "AIzaSyCfoLHOoi8t_gjhFcDDBIjadtxqF3NuHQQ",
    authDomain: "el-formu.firebaseapp.com",
    databaseURL: "https://el-formu.firebaseio.com",
    projectId: "el-formu",
    storageBucket: "el-formu.appspot.com",
    messagingSenderId: "40809937070",
    appId: "1:40809937070:web:63d6636fd38bd5df9cd53f"
  };

 firebase.initializeApp(firebaseConfig);
}

function getMessages() {
    let database = firebase.database();
    let noticiasRef = database.ref('noticias');
  
    // READ operation
    noticiasRef.on('value', function(snapshot) {
      let noticias = snapshot.val();
  
      console.log(noticias);
  
      noticias.map(function(messageObject) {
        writeMessage(messageObject.text);
      });
    })
};
  
  
  initDatabase();
  getMessages();
  


for ( let i = 0; i < noticias.length; i++){

let caja = document.createElement("div");
caja.className = "titudescri";
document.querySelector("body").appendChild(caja);

let titulo = document.createElement("h1");
caja.appendChild(titulo);
titulo.innerText = noticias[i].titulo;


let descripcion = document.createElement("h2");
caja.appendChild(descripcion);
//document.querySelector(".titudescri").appendChild(descripcion);
descripcion.innerText = noticias[i].descripcion;

}