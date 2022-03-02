const number = [];


let sum = 0;
while (sum < 200) {
    let inputNumber = parseInt(prompt("Inserisci un numero"));
    if(isNaN(inputNumber)) {
        inputNumber = parseInt(prompt("Inserisci un numero"));
    }

    number.push(inputNumber);
    sum += inputNumber;


    console.log(number);
    console.log(sum);
}