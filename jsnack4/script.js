/**
 * Function that sum the 2 numbers and tell if the result iss odd or even
 * 
 * @param {*} firstNum Put the first number
 * @param {*} secondNum Put the second number
 */
function sumOdd(firstNum, secondNum) {
    if((firstNum + secondNum)%2 == 0) {
        console.log(`La somma dei numeri: pari`);
    } else {
        console.log(`La somma dei numeri: dispari`);
    }
}

sumOdd(3, 4);