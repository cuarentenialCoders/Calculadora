/** Operación multiplicar, recibe 2 números **/

function multiplicar(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    }
    
    return num1 * num2;
}

module.exports = multiplicar;