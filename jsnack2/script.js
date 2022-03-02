let nArrays = parseInt(prompt("Quanti array vuoi generare?"));
while(isNaN(nArrays)) {
    nArrays = parseInt(prompt("Quanti array vuoi generare?"));
}

let i = 0;
while(i < nArrays) {
    const arrayN = [];

    for(let x = 0; x < 10; x++) {
        let number = Math.floor(Math.random() * 4528) + 4;
        arrayN.push(number);
    }

    console.log(arrayN);
    i++;
}