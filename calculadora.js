console.log('Super calculadora');

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');



/** **Pruebas**  **/

console.log(sumar(10, 13));
console.log(restar(21, 5));
console.log(restar(21, 33));
console.log(multiplicar(2, 6));
console.log(multiplicar(5, 0));
console.log(dividir(10, 5));
console.log(dividir(40, 0));

