
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10

console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
     asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');

        } else{
            asignarTextoElemento ('p', 'El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
     }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;   
    
    console.log (numeroGenerado);
    console.log (listaNumeroSorteado);
    //Si el numero generado está incluido en la lista
    //Si ya sorteamos todos los numeros?
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los numero posibles')
    } 
    else {

        if (listaNumeroSorteado.includes(numeroGenerado)) {
                return generarNumeroSecreto();
        } 
        else {
                listaNumeroSorteado.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento ('h1', 'Juego del numero secreto!');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego (){
    //Limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //incializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
