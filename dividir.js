/** Operación dividir, recibe 2 números **/

function dividir(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }
    
    return num1 / num2;
}

module.exports = dividir;