let amigos = [] ;

function agregarAmigo() {
    let nombres = document.getElementById('amigo').value; // Obtiene el valor del input
    
    if (nombres.length === 0) { // Verifica si el campo está vacío
        alert("Por favor, inserte un nombre.");
    } else {
            amigos.push(nombres); // Agrega el nombre a la lista
            console.log(amigos);
        }
        limpiarCaja(); // Limpia el campo siempre después de agregar
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos'); // Selecciona la lista HTML
    lista.innerHTML = ""; // Limpia la lista 

    for(let i=0;i< amigos.length; i++){
        let elemento = document.createElement('li'); // Crea un nuevo elemento <li>
        elemento.textContent= amigos[i]; // Asigna el nombre al <li>
        lista.appendChild(elemento) // Agrega el <li> a la lista
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) { // Verifica si la lista está vacía
        alert("La lista de amigos está vacía, inserte un nombre.");
        return;
    } else {
        let indiceAleatorio= Math.floor(Math.random()* amigos.length);
        let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre sorteado

        resultado.innerHTML=`El amigo secreto sorteado es: ${amigoSorteado}`

    }

}


