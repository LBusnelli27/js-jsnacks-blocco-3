function sumOdd(firstNum, secondNum) {
    if((firstNum + secondNum)%2 == 0) {
        console.log(`La somma dei numeri: pari`);
    } else {
        console.log(`La somma dei numeri: dispari`);
    }
}

sumOdd(3, 4);