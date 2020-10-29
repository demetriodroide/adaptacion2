evitarrefresco.addEventListener("click", prevenir );

let evitarrefresco = document.querySelector("#pulsar");

function prevenir(event) {
    event.preventDefault();
}

var recogedatos = document.querySelector("#formu").enctype;
  document.querySelector("#dejaloaqui").innerHTML = recogedatos;