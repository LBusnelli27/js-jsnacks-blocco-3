const numberPari = [];
const numberDispari = [];

let inputNumber = parseInt(prompt("Inserisci un numero"));
while(isNaN(inputNumber)) {
    inputNumber = parseInt(prompt("Inserisci un numero"));
}

let sumPari = 0;
let sumDispari = 0;
while ((sumPari < 200) && (sumDispari < 200)) {
    if(inputNumber%2 == 0) {
        numberPari.push(inputNumber);
        sumPari += inputNumber;
    } else {
        numberDispari.push(inputNumber);
        sumDispari += inputNumber;
    }


    console.log(numberPari);
    console.log(numberDispari);
    console.log(sumPari);
    console.log(sumDispari);
}