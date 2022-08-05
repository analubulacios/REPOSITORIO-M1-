'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

/*  
  pos 6 5 4 3 2 1 0
  num 1 1 0 1 0 1 0

  2^0 * 0 = 0
  2^1 * 1 = 2
  2^2 * 0 = 0
  2^3 * 1 = 8
  2^4 * 0 = 0
  2^5 * 1 = 32
  2^6 * 1 = 64
  suma    = 106
  dec = Sumatoria de (2 ^ posición * digito)
  */

  let bina = num.split('').reverse().join('') // defino la variable del parametro num para separarlo, revertirlo y volverlo a juntar//
  let dec = 0; // declaro la variable en la que se manifestara el resultado //
  for (let i = 0; i < bina.length; i++) { // itero un bucle for para el calculo //
    dec = dec + (2**i * bina[i])// aqui podria poner un parseInt(bina[i])//
  }
  return dec; // retornar siempre por fuera del bucle//
}


function DecimalABinario(num) {
  // tu codigo aca
 /* 
  num    coc  rest
  37/2 = 18   (1)
  18/2 = 9    (0)
  9/2  = 4    (1)
  4/2  = 2    (0)
  2/2  = 1    (0)
  1/2  = 0    (1)
  
  Los restos de abajo para arriba:
  
  bin = 1 0 0 1 0 1
  
  Se divide entre 2 sucesivamente al numero hasta que el cociente sea 0
  Se añaden los restos de cada división al inicio de un array
  Se unen los elementos del array en un string y se devuelve
  */




  let bina =[]; // declaro una variable como array vacio ??
  while (num > 0) { // abro el loop while con la condicion de que agregue los restos al array de la division en 2 hasta que el cociente sea 0//
   bina.push(num % 2);// pusheo al array los restos de la division del numero en 2//
   num = Math.floor (num/2); // de cada numero dividio en dos si no da un entero y da un decimal lo redondeo para abajo //
  }
 return bina.reverse().join(''); // retorno el array pero : primero lo doy vuelta y luego junto los valores en un numero binario de 8 digitos. 
 } 
 

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}