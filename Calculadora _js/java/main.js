
// decalracion de variables para los botones
const pantalla = document.querySelector('.pantalla');
const valorActual = document.getElementById('valorActual');
const borrar = document.getElementById('borrar');
const volver = document.getElementById('volver');
const dividir = document.getElementById('dividir');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const multiplicar = document.getElementById('multiplicar');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const restar = document.getElementById('restar');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const sumar = document.getElementById('sumar');
const igual = document.getElementById('igual');
const cero = document.getElementById('cero');

let valorAnterior = null;
let operacionActual = null;

/* a cada boton le agregamos un escuchador de evento*/
botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;

        if (boton.id === "c" ){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "error"){
              pantalla.textContent = "0";
            } else {
                pantalla.textContent.slice(0,-1);
            }
             console.log(boton.id);   
            return;

        }
        if (boton.id === "igual"){
            try{
                pantalla.textContent = "igual"

            }catch{
                pantalla.textContent ="error";
            }
            return;
        }


        if (pantalla.textContent === "0"|| pantalla.textContent === "error"){
            pantalla.textContent = botonApretado ;
        
        }else{
            pantalla.textContent += botonApretado;

        }

        

    })
})
    function suma (a,b){
        a + b ;
}
    function resta (a,b){
        a - b;
}
    function multiplicacion (a,b){
        a * b;
}
    function division (a,b){
        a / b ;
}



// Eventos de los botones de operación
sumar.addEventListener('click', () => {
    operacionActual = 'suma';
    valorAnterior = Number(valorActual.innerText);
    pantalla.innerText = `${valorAnterior} + `;
    valorActual.innerText = '';
  });
  
  restar.addEventListener('click', () => {
    operacionActual = 'resta';
    valorAnterior = Number(valorActual.innerText);
    pantalla.innerText = `${valorAnterior} - `;
    valorActual.innerText = '';
  });
  
  multiplicar.addEventListener('click', () => {
    operacionActual = 'multiplicacion';
    valorAnterior = Number(valorActual.innerText);
    pantalla.innerText = `${valorAnterior} * `;
    valorActual.innerText = '';
  });
  
  dividir.addEventListener('click', () => {
    operacionActual = 'division';
    valorAnterior = Number(valorActual.innerText);
    pantalla.innerText = `${valorAnterior} / `;
    valorActual.innerText = '';

// Evento para los botones numéricos
cero.addEventListener('click', () => {
    valorActual.innerText += '0';
  });
  
  uno.addEventListener('click', () => {
    valorActual.innerText += '1';
  });
  


// falta completar



  // Evento para el botón de igual
igual.addEventListener('click', () => {
    const valorActualNum = Number(valorActual.innerText);
    let resultado;
  
    if (operacionActual === 'suma') {
      resultado = suma(valorAnterior, valorActualNum);
    } else if (operacionActual === 'resta') {
      resultado = resta(valorAnterior, valorActualNum);


      //falta completar

      // falta el evento para boton borrar
      // falta boton que borra el ultimo digito
        // Borra el último dígito del valor actual
  if (valorActualStr.length > 0) {
    const nuevoValorStr = valorActualStr.slice(0, -1);
    valorActual.innerText = nuevoValorStr;